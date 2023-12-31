import { S } from "./style";
//
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useArticleStore } from "store/articles";
import { useHomeFilterStore } from "store/HomeFilter";
import { ArticlesDataType } from "../../types/article";
import Card from "../../components/Card";
import Nav from "components/Nav";
import Loading from "components/Card/Loading";
import Nothing from "components/Nothing";

export default function Main() {
  const [articleData, setArticleData] = useState<ArticlesDataType[]>([]);
  const { textList, changeText } = useHomeFilterStore();
  const { idList } = useArticleStore();
  const [page, setPage] = useState(0);
  const [noMoreData, setNoMoreData] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [loading, setLoading] = useState(false);

  const REACT_APP_NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !loading && !noMoreData) {
      setLoading(true);
      if (articleData.length > 0 && !loading) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const date = Number(textList.date.split("-").join(""));
    const countriesArray = textList.country.map((country) => country.value[0]);
    const countries = countriesArray.join(" AND ");
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${REACT_APP_NYT_API_KEY}`;

    axios
      .get(
        `${apiUrl}&page=${page}${
          textList.title && `&fq=headline:${textList.title}`
        }${textList.date && `&begin_date=${date}&end_date=${date}`}${
          textList.country.length > 0 ? `&q=${countries}` : ""
        }`
      )
      .then((res) => {
        const newData: ArticlesDataType[] = res.data?.response?.docs || [];
        if (res.data.response?.docs.length === 0) {
          setNoMoreData(true);
        } else {
          const UpdateData = newData.map((item) => {
            const isScraped = idList?.includes(item._id);
            return { ...item, like: isScraped };
          });
          setArticleData([...articleData, ...UpdateData]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 429) {
          alert("조금 뒤에 다시 요청해주세요.");
          return;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [textList, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [articleData]);

  return (
    <S.Container $isEmpty={noMoreData && articleData.length === 0}>
      <Nav
        textList={textList}
        changeText={changeText}
        resetData={setArticleData}
        isMain
      />

      {articleData.length > 0 &&
        articleData.map((data) => {
          return <Card key={data._id} data={{ ...data }} />;
        })}
      {!loading && articleData.length === 0 && noMoreData && (
        <Nothing text={"조건에 맞는 기사가 없습니다."} isMain />
      )}
      {loading && <Loading isEmpty={articleData.length === 0} />}
      <div
        ref={loaderRef}
        style={{ height: "100px", background: "transparent" }}
      />
    </S.Container>
  );
}

import { S } from "./style";
//
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import { useHomeFilterStore } from "store/HomeFilter";
import Nav from "components/Nav";
import axios from "axios";
import { useArticleStore } from "store/articles";
import Loading from "components/Card/Loding";
import Nothing from "components/Nothing";

interface ArticlesData {
  _id: string;
  pub_date: string;
  headline: object;
  source: string;
  byline: object;
  like: boolean;
  web_url: string;
  abstract: string;
}

export default function Main() {
  const [articleData, setArticleData] = useState<ArticlesData[]>([]);
  const [page, setPage] = useState(0);
  const { textList, changeText } = useHomeFilterStore();
  const loaderRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [loading, setLoading] = useState(false);
  const { idList } = useArticleStore();
  const [noMoreData, setNoMoreData] = useState(false);
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
    const countriesArray = textList.country.map((country) => country.value);
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
        const newData: ArticlesData[] = res.data?.response?.docs || [];
        if (newData.length === 0) {
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
          return; // 요청 중단
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
      />

      {articleData.map((data) => {
        return <Card key={data._id} data={data} />;
      })}
      {noMoreData && articleData.length === 0 && (
        <Nothing text={"조건에 맞는 기사가 없습니다."} isHome />
      )}
      {loading && <Loading isEmpty={articleData.length === 0} />}
      <div
        ref={loaderRef}
        style={{ height: "100px", background: "transparent" }}
      />
    </S.Container>
  );
}

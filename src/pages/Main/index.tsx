import { S } from "./style";
//
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import { removeArticles } from "modules/function";
import { useArticleStore } from "store/articles";

interface ArticlesData {
  _id: string;
  pub_date: string;
  headline: object;
  news_desk: string;
  byline: object;
  like: boolean;
}

export default function Main() {
  const [articleData, setArticleData] = useState<ArticlesData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8MeO1rSj1FcMC9n8kbDBTUtw0EgduciL&page=${pageNumber}`
      );
      const newData: ArticlesData[] = response.data?.response?.docs || [];

      const idList = JSON.parse(localStorage.getItem("articleList"));
      // const idList.state.articleList);
      const UpdateData = newData.map((item) => {
        const isScraped = idList?.includes(item._id);
        return { ...item, like: isScraped };
      });
      await setArticleData((prevData) => [...prevData, ...UpdateData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setLoading(true);
    }
  };
  // const saveArticle = (item: object) => {
  //   let preArray: any[] = [];
  //   let preIdList: any[] = [];

  //   if (localStorage.getItem("articleList")) {
  //     preArray = JSON.parse(localStorage.getItem("articleList"));
  //   }
  //   const newArray = [...preArray, item];
  //   localStorage.setItem("articleList", JSON.stringify(newArray));

  //   if (localStorage.getItem("idList")) {
  //     preIdList = JSON.parse(localStorage.getItem("idList"));
  //   }
  //   const newIdList = [...preIdList, item._id];
  //   localStorage.setItem("idList", JSON.stringify(newIdList));
  // };

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
  }, []);

  useEffect(() => {
    if (loading) {
      fetchData(page);
    }
  }, [loading]);

  return (
    <S.Container>
      {articleData.map((data) => {
        return (
          <Card
            key={data._id}
            data={data}
            // saveArticle={saveArticle}
            removeArticle={removeArticles}
          />
        );
      })}
      {loading && <p>loading</p>}
      <div
        ref={loaderRef}
        style={{ height: "20px", background: "transparent" }}
      />
    </S.Container>
  );
}

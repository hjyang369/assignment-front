import { S } from "./style";
//
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";

type Articles = {
  [key: string]: string;
};

export default function Main() {
  const [articleData, setArticleData] = useState<Articles[]>([]);
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
      const newData: Articles[] = response.data?.response?.docs || [];
      setArticleData((prevData) => [...prevData, ...newData]);
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
        return <Card key={data._id} data={data} />;
      })}
      {loading && <p>loading</p>}
      <div
        ref={loaderRef}
        style={{ height: "20px", background: "transparent" }}
      />
    </S.Container>
  );
}

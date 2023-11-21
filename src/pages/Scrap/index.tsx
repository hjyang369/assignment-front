import { S } from "./style";
//
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Nothing from "./Nothing";

type Articles = {
  [key: string]: string;
};

export default function Scrap() {
  const [articleData, setArticleData] = useState<Articles[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8MeO1rSj1FcMC9n8kbDBTUtw0EgduciL`
      )
      .then((res) => {
        if (res.status === 200) {
          setArticleData(res.data.response.docs);
        } else if (res.status === 400) {
          return null;
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <S.Container $isEmpty={articleData.length === 0}>
      {articleData.length > 0 ? (
        articleData.map((data) => {
          return <Card key={data._id} data={data} />;
        })
      ) : (
        <Nothing />
      )}
    </S.Container>
  );
}

import { S } from "./style";
//
import axios from "axios";
import Nav from "components/Nav";
import { useEffect, useState } from "react";
import Card from "./Card";

type Articles = {
  [key: string]: string;
};

export default function Main() {
  const [articleData, setArticleData] = useState<Articles[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8MeO1rSj1FcMC9n8kbDBTUtw0EgduciL`,
        {
          // params: {
          //   limit: 5,
          //   offset: 0,
          //   sortBy: "LATEST",
          // },
        }
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
    <S.Container>
      {articleData.map((data) => {
        return <Card key={data._id} data={data} />;
      })}
    </S.Container>
  );
}

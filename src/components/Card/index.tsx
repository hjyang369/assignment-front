import { S } from "./style";
import { ReactComponent as StarIcon } from "../../asset/icon/star.svg";
import { ReactComponent as CheckedStarIcon } from "../../asset/icon/checkedStar.svg";
import { useEffect, useState } from "react";
import { useArticleStore } from "store/articles";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
interface ArticlesData {
  data: {
    _id: string;
    pub_date: string;
    headline: {
      main: string;
    };
    source: string;
    byline: {
      person: [{ firstname: string }];
    };
    like: boolean;
    web_url: string;
    abstract: string;
  };
}

export default function Card({ data }: ArticlesData) {
  const { _id, pub_date, headline, source, byline, like, web_url, abstract } = {
    ...data,
  };
  const [isSaved, setIsSaved] = useState(false);
  const { addArticle, removeArticle } = useArticleStore();

  const date = new Date(pub_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedDate = `${year}.${month < 10 ? "0" + month : month}.${
    day < 10 ? "0" + day : day
  } (${dayOfWeek})`;

  useEffect(() => {
    if (like) {
      setIsSaved(like);
    }
  }, []);

  const saveArticles = () => {
    setIsSaved(true);
    addArticle({
      _id,
      pub_date,
      headline,
      source,
      byline,
      like: true,
      web_url,
      abstract,
    });
  };

  const removeArticles = (id: string) => {
    removeArticle(id);
    setIsSaved(false);
  };

  return (
    <S.Container>
      <S.Top>
        <S.Link to={web_url}>{headline.main}</S.Link>
        {isSaved ? (
          <CheckedStarIcon onClick={() => removeArticles(_id)} fill="#FFB800" />
        ) : (
          <StarIcon onClick={() => saveArticles()} fill="#6D6D6D" />
        )}
      </S.Top>
      <S.Bottom>
        <S.NameContainer>
          <S.NameData>{source}</S.NameData>
          <S.NameData>
            {byline.person[0]?.firstname
              ? byline.person[0]?.firstname + " 기자"
              : "무명 기자"}
            {byline.person.length > 1 &&
              " 외 " + (byline.person.length - 1) + "인"}
          </S.NameData>
        </S.NameContainer>
        <S.DateData>{formattedDate}</S.DateData>
      </S.Bottom>
    </S.Container>
  );
}

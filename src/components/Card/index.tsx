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
    news_desk: string;
    byline: {
      person: [{ firstname: string }];
    };
    like: boolean;
  };
}

export default function Card({ data }: ArticlesData) {
  const { _id, pub_date, headline, news_desk, byline, like } = { ...data };
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
    addArticle({ _id, pub_date, headline, news_desk, byline, like: true });
    // saveArticle({ _id, pub_date, headline, news_desk, byline, like: true });
  };

  const removeArticles = (id: string) => {
    // removeArticle(id);
    removeArticle(id);
    setIsSaved(false);
  };

  return (
    <S.Container>
      <S.Top>
        <S.Title>{headline.main}</S.Title>
        {isSaved ? (
          <CheckedStarIcon onClick={() => removeArticles(_id)} fill="#FFB800" />
        ) : (
          <StarIcon onClick={() => saveArticles()} fill="#6D6D6D" />
        )}
      </S.Top>
      <S.Bottom>
        <S.NameContainer>
          <S.NameData>{news_desk}</S.NameData>
          {byline.person.map((name, idx) => {
            return <S.NameData key={idx}>{name.firstname} 기자</S.NameData>;
          })}
        </S.NameContainer>
        <S.DateData>{formattedDate}</S.DateData>
      </S.Bottom>
    </S.Container>
  );
}

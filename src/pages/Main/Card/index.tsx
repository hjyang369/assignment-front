import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { S } from "./style";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
interface cardDataProps {
  [key: string]: string | object | number;
}

export default function Card({ data }: cardDataProps) {
  const date = new Date(data.pub_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedDate = `${year}.${month < 10 ? "0" + month : month}.${
    day < 10 ? "0" + day : day
  } (${dayOfWeek})`;

  return (
    <S.Container>
      <S.Top>
        <S.Title>{data.headline.main}</S.Title>
        <FontAwesomeIcon icon={faStar} />
      </S.Top>
      <S.Bottom>
        <S.NameContainer>
          <S.NameData>{data.news_desk}</S.NameData>
          {data.byline.person.map((name, idx) => {
            return <S.NameData key={idx}>{name.firstname} 기자</S.NameData>;
          })}
        </S.NameContainer>
        <S.DateData>{formattedDate}</S.DateData>
      </S.Bottom>
    </S.Container>
  );
}

import Button from "components/Button";
import { S } from "./style";
//

const countryData = [
  { id: 1, name: "대한민국" },
  { id: 2, name: "중국" },
  { id: 3, name: "일본" },
  { id: 4, name: "미국" },
  { id: 5, name: "북한" },
  { id: 6, name: "러시아" },
  { id: 7, name: "프랑스" },
  { id: 8, name: "영국" },
];

export default function Modal() {
  return (
    <S.Container>
      <S.SelectValue>
        <S.Title>헤드라인</S.Title>
        <S.Input></S.Input>
      </S.SelectValue>
      <S.SelectValue>
        <S.Title>날짜</S.Title>
        <S.Input></S.Input>
      </S.SelectValue>
      <S.SelectValue>
        <S.Title>국가</S.Title>
        <S.Buttons>
          {countryData.map((country) => {
            return <S.CountryBtn key={country.id}>{country.name}</S.CountryBtn>;
          })}
        </S.Buttons>
      </S.SelectValue>
      <Button onclick={null} text={"필터 적용하기"} />
    </S.Container>
  );
}
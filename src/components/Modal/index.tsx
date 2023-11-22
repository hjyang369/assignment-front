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

type modalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ setIsOpen }: modalProps) {
  return (
    <S.Container>
      <S.ModalBlack onClick={() => setIsOpen(false)} />
      <S.ModalMain>
        <S.SelectValue>
          <S.Title>헤드라인</S.Title>
          <S.Input placeholder="검색하실 헤드라인을 입력해주세요."></S.Input>
        </S.SelectValue>
        <S.SelectValue>
          <S.Title>날짜</S.Title>
          <S.Input type="date" placeholder="날짜를 선택해주세요."></S.Input>
        </S.SelectValue>
        <S.SelectValue>
          <S.Title>국가</S.Title>
          <S.Buttons>
            {countryData.map((country) => {
              return (
                <S.CountryBtn key={country.id}>{country.name}</S.CountryBtn>
              );
            })}
          </S.Buttons>
        </S.SelectValue>
        <Button onclick={null} text={"필터 적용하기"} />
      </S.ModalMain>
    </S.Container>
  );
}

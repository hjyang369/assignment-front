import Button from "components/Button";
import { S } from "./style";
import useInputValue from "hooks/useInputValue";
import { useState } from "react";

const countryData = [
  { id: 1, name: "대한민국", value: "korea" },
  { id: 2, name: "중국", value: "china" },
  { id: 3, name: "일본", value: "Japan" },
  { id: 4, name: "미국", value: "USA" },
  { id: 5, name: "북한", value: "North Korea" },
  { id: 6, name: "러시아", value: "Russia" },
  { id: 7, name: "프랑스", value: "France" },
  { id: 8, name: "영국", value: "UK" },
];

type modalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeText: ({}) => void;
  setArticleData: ([]) => void;
};

export default function Modal({
  setIsOpen,
  changeText,
  setArticleData,
}: modalProps) {
  const initInputValue = {
    headLine: "",
  };
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState("");
  const [isfocus, setIsfocus] = useState(false);

  const { inputValue, handleInput } = useInputValue(initInputValue);

  const selectCountry = (name: string, idx: number) => {
    const isDuplicate = countries.some((country) => country.name === name);
    if (!isDuplicate) {
      setCountries((prevCountries) => [...prevCountries, countryData[idx]]);
    } else {
      const updatedCountries = countries.filter(
        (country) => country.name !== name
      );
      setCountries(updatedCountries);
    }
  };

  const selectDate = (e) => {
    setDate(e.target.value);
  };

  const submitData = () => {
    changeText({
      title: inputValue.headLine,
      date: date,
      country: countries,
    });
    setArticleData([]);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.ModalBlack onClick={() => setIsOpen(false)} />
      <S.ModalMain>
        <S.SelectValue>
          <S.Title>헤드라인</S.Title>
          <S.Input
            type="text"
            name="headLine"
            placeholder="검색하실 헤드라인을 입력해주세요."
            onChange={handleInput}
          ></S.Input>
        </S.SelectValue>
        <S.SelectValue>
          <S.Title>날짜</S.Title>
          <S.Input
            type={isfocus ? "date" : "text"}
            id="datepicker"
            name="datepicker"
            placeholder="날짜를 선택해주세요."
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            onChange={(e) => selectDate(e)}
          />
        </S.SelectValue>
        <S.SelectValue>
          <S.Title>국가</S.Title>
          <S.Buttons>
            {countryData.map((country, idx) => {
              return (
                <S.CountryBtn
                  key={country.id}
                  htmlFor={country.name}
                  onClick={() => selectCountry(country.name, idx)}
                  $isSelected={countries.some(
                    (selectedCountry) => selectedCountry.name === country.name
                  )}
                >
                  {country.name}
                  <input
                    type="checkbox"
                    name="country"
                    value={country.name}
                  ></input>
                </S.CountryBtn>
              );
            })}
          </S.Buttons>
        </S.SelectValue>
        <Button onclick={() => submitData()} text={"필터 적용하기"} />
      </S.ModalMain>
    </S.Container>
  );
}

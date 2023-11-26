import Button from "components/Button";
import { S } from "./style";
import useInputValue from "hooks/useInputValue";
import { useState } from "react";
import { useLocation } from "react-router";

const countryData = [
  { id: 1, name: "대한민국", value: ["Korea", "Korean"] },
  { id: 2, name: "중국", value: ["China", "Chinese"] },
  { id: 3, name: "일본", value: ["Japan", "Japanese"] },
  { id: 4, name: "미국", value: ["USA", "American", "America"] },
  { id: 5, name: "북한", value: ["North Korea", "North Korean"] },
  { id: 6, name: "러시아", value: ["Russia", "Russian"] },
  { id: 7, name: "프랑스", value: ["France", "French"] },
  { id: 8, name: "영국", value: ["UK", "Englishman"] },
];

type modalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeText: ({}) => void;
  resetData?: ([]) => void;
};

export default function Modal({
  setIsOpen,
  changeText,
  resetData,
}: modalProps) {
  const initInputValue = {
    headLine: "",
  };
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState("");
  const [isfocus, setIsfocus] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    isHome && resetData([]);
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

import { S } from "./style";
//
import { useState } from "react";
import { ArticlesDataType } from "../../types/article";
import Button from "components/Button";
import useInputValue from "hooks/useInputValue";
import { COUNTRY_DATA } from "../../modules/constants";
import { TextListType, CountryDataType } from "../../types/article";

type modalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeText: (data: TextListType) => void;
  resetData?: React.Dispatch<React.SetStateAction<ArticlesDataType[]>>;
  isMain?: boolean;
};

export default function Modal({
  setIsOpen,
  changeText,
  resetData,
  isMain,
}: modalProps) {
  const initInputValue = { headLine: "" };
  const [countries, setCountries] = useState<CountryDataType[]>([]);
  const [date, setDate] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { inputValue, handleInput } = useInputValue(initInputValue);

  const selectCountry = (name: string, idx: number) => {
    const isDuplicate = countries.some((country) => country.name === name);
    if (!isDuplicate) {
      setCountries((prevCountries) => [...prevCountries, COUNTRY_DATA[idx]]);
    } else {
      const updatedCountries = countries.filter(
        (country) => country.name !== name
      );
      setCountries(updatedCountries);
    }
  };

  const selectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const submitData = () => {
    changeText({
      title: inputValue.headLine,
      date: date,
      country: countries,
    });

    if (isMain) {
      typeof resetData === "function" && resetData([]);
    }

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
            type={isFocus ? "date" : "text"}
            id="datePicker"
            name="datePicker"
            placeholder="날짜를 선택해주세요."
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => selectDate(e)}
          />
        </S.SelectValue>
        <S.SelectValue>
          <S.Title>국가</S.Title>
          <S.Buttons>
            {COUNTRY_DATA.map((country, idx) => {
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

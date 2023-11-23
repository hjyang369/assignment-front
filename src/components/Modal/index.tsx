import Button from "components/Button";
import { S } from "./style";
import useInputValue from "hooks/useInputValue";
import { useState } from "react";
import { useFilterStore } from "store/filter";

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

// type Country = [string | undefined];

export default function Modal({ setIsOpen }: modalProps) {
  const initInputValue = {
    headLine: "",
  };
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState("");
  const [isfocus, setIsfocus] = useState(false);

  const { inputValue, handleInput } = useInputValue(initInputValue);
  const { changeText } = useFilterStore();

  const selectCountry = (name: string, e: any) => {
    if (countries.includes(name)) {
      setCountries(countries.filter((country) => country !== name));
    } else {
      setCountries([...countries, name]);
    }
  };

  const selectDate = (e) => {
    setDate(e.target.value);
  };

  const submitData = () => {
    let country = "";
    country = `${countries[0] ? countries[0] : ""}${
      countries.length >= 2 ? ` 외 ${countries.length - 1}개` : ""
    }`;

    changeText({
      title: inputValue.headLine,
      date: date,
      country: country !== "" ? country : "",
    });

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
            {countryData.map((country) => {
              return (
                <S.CountryBtn
                  key={country.id}
                  htmlFor={country.name}
                  onClick={(e) => selectCountry(country.name, e)}
                  $isSelected={countries.includes(country.name)}
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

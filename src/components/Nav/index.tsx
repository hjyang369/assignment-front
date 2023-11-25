import { S } from "./style";
import Tag from "components/Tag";
import Modal from "components/Modal";
import { useState } from "react";
import { ReactComponent as CalenderIcon } from "../../asset/icon/calender.svg";
import { ReactComponent as SearchIcon } from "../../asset/icon/search.svg";

interface Text {
  textList: {
    title: string;
    date: string;
    country: string;
  };
  changeText: () => void;
  setArticleData: () => void;
}
export default function Nav({ textList, changeText, setArticleData }: Text) {
  const [isOpen, setIsOpen] = useState(false);

  const country = `${textList.country[0] ? textList.country[0].name : ""}${
    textList.country.length >= 2 ? ` 외 ${textList.country.length - 1}개` : ""
  }`;

  const navIcon = [
    {
      id: 1,
      icon: <SearchIcon />,
      text: textList.title ? textList.title : "전체 헤드라인",
    },
    {
      id: 2,
      icon: <CalenderIcon />,
      text: textList.date ? textList.date : "전체 날짜",
    },
    {
      id: 3,
      icon: undefined,
      text: textList.country.length > 0 ? country : "전체 국가",
    },
  ];

  return (
    <S.Container>
      {navIcon.map((icon) => {
        return (
          <div key={icon.id} onClick={() => setIsOpen(!isOpen)}>
            <Tag icon={icon.icon} text={icon.text} />
          </div>
        );
      })}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          changeText={changeText}
          setArticleData={setArticleData}
        />
      )}
    </S.Container>
  );
}

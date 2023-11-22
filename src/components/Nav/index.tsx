import { S } from "./style";
import Tag from "components/Tag";
import Modal from "components/Modal";
import { useState } from "react";
import { ReactComponent as CalenderIcon } from "../../asset/icon/calender.svg";
import { ReactComponent as SearchIcon } from "../../asset/icon/search.svg";

const navIcon = [
  { id: 1, icon: <SearchIcon />, text: "전체 헤드라인" },
  { id: 2, icon: <CalenderIcon />, text: "전체 날짜" },
  { id: 3, icon: undefined, text: "전체 국가" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      {navIcon.map((icon) => {
        return (
          <div key={icon.id} onClick={() => setIsOpen(!isOpen)}>
            <Tag icon={icon.icon} text={icon.text} />
          </div>
        );
      })}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </S.Container>
  );
}

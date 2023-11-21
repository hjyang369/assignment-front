import {
  faCalendarCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { S } from "./style";
import Tag from "components/Tag";

const navIcon = [
  { id: 1, icon: faMagnifyingGlass, text: "전체 헤드라인" },
  { id: 2, icon: faCalendarCheck, text: "전체 날짜" },
  { id: 3, icon: undefined, text: "전체 국가" },
];

export default function Nav() {
  return (
    <S.Container>
      {navIcon.map((icon) => {
        return <Tag key={icon.id} iconName={icon.icon} text={icon.text} />;
      })}
    </S.Container>
  );
}

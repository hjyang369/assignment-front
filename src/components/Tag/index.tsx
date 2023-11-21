import {
  IconDefinition,
  faCalendarCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { S } from "./style";

type tagProps = {
  iconName?: IconDefinition;
  text: string;
};

export default function Tag({ iconName, text }: tagProps) {
  return (
    <S.Container>
      <FontAwesomeIcon icon={iconName as IconProp} />
      <p>{text}</p>
    </S.Container>
  );
}

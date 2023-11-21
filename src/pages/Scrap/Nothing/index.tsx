import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { S } from "./style";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import Button from "components/Button";
//

export default function Nothing() {
  return (
    <S.Container>
      <FontAwesomeIcon icon={faFileLines} />
      <S.AAAA>저장된 스크랩이 없습니다.</S.AAAA>
      <Button />
    </S.Container>
  );
}

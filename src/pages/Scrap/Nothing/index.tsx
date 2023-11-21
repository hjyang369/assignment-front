import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { S } from "./style";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import Button from "components/Button";
import { useNavigate } from "react-router";
//

export default function Nothing() {
  const navigate = useNavigate();

  const movePage = (): void => {
    navigate("/");
  };

  return (
    <S.Container>
      <FontAwesomeIcon icon={faFileLines} />
      <S.AAAA>저장된 스크랩이 없습니다.</S.AAAA>
      <Button onclick={movePage} text={"스크랩 하러 가기"} />
    </S.Container>
  );
}

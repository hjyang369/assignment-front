import { S } from "./style";
import { ReactComponent as ScrapIcon } from "../../asset/icon/scrap.svg";
//
import { useNavigate } from "react-router";
import Button from "components/Button";

type nothingProps = {
  text: string;
  isMain?: boolean;
};

export default function Nothing({ text, isMain }: nothingProps) {
  const navigate = useNavigate();

  const movePage = (): void => {
    navigate("/");
  };

  return (
    <S.Container>
      <ScrapIcon width="36" height="36" stroke="#6D6D6D" />
      <S.Text>{text}</S.Text>
      {!isMain && <Button onclick={movePage} text={"스크랩 하러 가기"} />}
    </S.Container>
  );
}

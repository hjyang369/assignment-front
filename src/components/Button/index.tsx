import { S } from "./style";
//
import { useNavigate } from "react-router";

export default function Button() {
  const navigate = useNavigate();

  const movePage = (path: string) => {
    navigate(path);
  };
  return <S.Buttons onClick={() => movePage("/")}>스크랩 하러 가기</S.Buttons>;
}

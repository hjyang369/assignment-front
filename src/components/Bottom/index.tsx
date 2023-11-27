import { S } from "./style";
import { ReactComponent as HomeIcon } from "../../asset/icon/home.svg";
import { ReactComponent as ScrapIcon } from "../../asset/icon/scrap.svg";
//
import { useLocation, useNavigate } from "react-router";

export default function Bottom() {
  const location = useLocation();
  const isMain = location.pathname === "/";
  const isScrap = location.pathname === "/scrap";

  const navigate = useNavigate();
  const movePage = (path: string): void => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Btn onClick={() => movePage("/")} $currentTab={isMain}>
        <HomeIcon fill={isMain ? "#FFFFFF" : "#6D6D6D"} />홈
      </S.Btn>
      <S.Btn onClick={() => movePage("/scrap")} $currentTab={isScrap}>
        <ScrapIcon
          width="24"
          height="24"
          stroke={isScrap ? "#FFFFFF" : "#6D6D6D"}
        />
        스크랩
      </S.Btn>
    </S.Container>
  );
}

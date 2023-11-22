import { S } from "./style";
import { useNavigate } from "react-router";
import { ReactComponent as HomeIcon } from "../../asset/icon/home.svg";
import { ReactComponent as ScrapIcon } from "../../asset/icon/scrap.svg";
import { useState } from "react";

export default function Bottom() {
  const [currentTab, setCurrentTab] = useState("home");

  const navigate = useNavigate();
  const movePage = (name: string, path: string): void => {
    navigate(path);
    setCurrentTab(name);
  };

  return (
    <S.Container>
      <S.Btn
        onClick={() => movePage("home", "/")}
        $currentTab={currentTab === "home"}
      >
        <HomeIcon fill={currentTab === "home" ? "#FFFFFF" : "#6D6D6D"} />홈
      </S.Btn>
      <S.Btn
        onClick={() => movePage("scrap", "/scrap")}
        $currentTab={currentTab === "scrap"}
      >
        <ScrapIcon
          width="24"
          height="24"
          stroke={currentTab === "scrap" ? "#FFFFFF" : "#6D6D6D"}
        />
        스크랩
      </S.Btn>
    </S.Container>
  );
}

import { faFileLines, faHouse } from "@fortawesome/free-solid-svg-icons";
import { S } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

const icons = [
  { id: 1, icon: faHouse, text: "홈", path: "/" },
  { id: 2, icon: faFileLines, text: "스크랩", path: "/scrap" },
];

export default function Bottom() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const navigate = useNavigate();
  const movePage = (path: string) => {
    navigate(path);
  };

  return (
    <S.Container>
      {icons.map((data) => {
        return (
          <S.Btn
            key={data.id}
            onClick={() => movePage(data.path)}
            $isMainPage={isMainPage}
          >
            <FontAwesomeIcon icon={data.icon} />
            {data.text}
          </S.Btn>
        );
      })}
    </S.Container>
  );
}

import { S } from "./style";
//
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function Frame() {
  return (
    <S.Container>
      <S.Main>
        <Nav />
        <Outlet />
      </S.Main>
    </S.Container>
  );
}

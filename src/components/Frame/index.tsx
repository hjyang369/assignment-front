import { S } from "./style";
//
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Bottom from "components/Bottom";

export default function Frame() {
  return (
    <S.Container>
      <S.Main>
        <Nav />
        <Outlet />
        <Bottom />
      </S.Main>
    </S.Container>
  );
}

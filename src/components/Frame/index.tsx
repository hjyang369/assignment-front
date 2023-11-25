import { S } from "./style";
//
import { Outlet } from "react-router-dom";
import Bottom from "components/Bottom";

export default function Frame() {
  return (
    <S.Container>
      <S.Main>
        <Outlet />
        <Bottom />
      </S.Main>
    </S.Container>
  );
}

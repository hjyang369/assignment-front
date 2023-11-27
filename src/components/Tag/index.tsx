import React, { ReactElement } from "react";
import { S } from "./style";

type tagProps = {
  icon?: ReactElement<SVGElement>;
  text: string;
};

export default function Tag({ icon, text }: tagProps) {
  return (
    <S.Container>
      {icon && React.cloneElement(icon, {})}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

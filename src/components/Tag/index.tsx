import React, { ReactElement } from "react";
import { S } from "./style";

type tagProps = {
  icon?: ReactElement<SVGElement>;
  text: string;
  hasValue: boolean;
};

export default function Tag({ icon, text, hasValue }: tagProps) {
  return (
    <S.Container $hasValue={hasValue}>
      {icon && React.cloneElement(icon, {})}
      <S.Text $hasValue={hasValue}>{text}</S.Text>
    </S.Container>
  );
}

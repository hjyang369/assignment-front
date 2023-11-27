import { S } from "./style";
//
import { ButtonHTMLAttributes } from "react";

type buttonProps = {
  onclick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  text: string;
};

export default function Button({ onclick, text }: buttonProps) {
  return <S.Buttons onClick={onclick}>{text}</S.Buttons>;
}

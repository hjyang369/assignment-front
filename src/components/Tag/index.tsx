import { S } from "./style";

type tagProps = {
  icon?: any;
  text: string;
};

export default function Tag({ icon, text }: tagProps) {
  return (
    <S.Container>
      {icon}
      <p>{text}</p>
    </S.Container>
  );
}

import { S } from "./style";

type tagProps = {
  icon?: any;
  text: string;
};

export default function Tag({ icon, text }: tagProps) {
  return (
    <S.Container>
      {icon}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

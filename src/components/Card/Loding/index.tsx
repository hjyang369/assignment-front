import { S } from "./style";

type loadingProps = {
  isEmpty: boolean;
};

export default function Loading({ isEmpty }: loadingProps) {
  return (
    <S.Container $isEmpty={isEmpty}>
      <S.Spinner></S.Spinner>
    </S.Container>
  );
}

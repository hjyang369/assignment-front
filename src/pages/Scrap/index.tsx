import { S } from "./style";
//
import Card from "../../components/Card";
import Nothing from "./Nothing";
import { useArticleStore } from "store/articles";

export default function Scrap() {
  const { articleList } = useArticleStore();
  const isEmpty = articleList.length === 0;

  return (
    <S.Container $isEmpty={isEmpty}>
      {!isEmpty ? (
        articleList?.map((data) => {
          return <Card key={data.content._id} data={data.content} />;
        })
      ) : (
        <Nothing />
      )}
    </S.Container>
  );
}

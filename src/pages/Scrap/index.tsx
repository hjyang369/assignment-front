import { S } from "./style";
//
import Card from "../../components/Card";
import Nothing from "./Nothing";
import { useArticleStore } from "store/articles";
import Nav from "components/Nav";
import { useScrapFilterStore } from "store/scrapFilter";

export default function Scrap() {
  const { articleList } = useArticleStore();
  const isEmpty = articleList.length === 0;
  const { textList, changeText } = useScrapFilterStore();

  return (
    <>
      <Nav textList={textList} changeText={changeText} />
      <S.Container $isEmpty={isEmpty}>
        {!isEmpty ? (
          articleList?.map((data) => {
            return <Card key={data.content._id} data={data.content} />;
          })
        ) : (
          <Nothing />
        )}
      </S.Container>
    </>
  );
}

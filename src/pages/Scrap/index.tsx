import { S } from "./style";
//
import Card from "../../components/Card";
import Nothing from "../../components/Nothing";
import { useArticleStore } from "store/articles";
import Nav from "components/Nav";
import { useScrapFilterStore } from "store/scrapFilter";
import { useEffect, useState } from "react";

export default function Scrap() {
  const { articleList } = useArticleStore();
  const [filteredList, setFilteredList] = useState(articleList);
  const isEmpty = articleList.length === 0;
  const isfilterEmpty = filteredList.length === 0;

  const { textList, changeText } = useScrapFilterStore();

  useEffect(() => {
    let filteredResult = [...articleList];

    if (textList.title) {
      const lowerCaseTitle = textList.title.toLowerCase();
      filteredResult = filteredResult.filter((article) =>
        article.content.headline.main.toLowerCase().includes(lowerCaseTitle)
      );
    }
    if (textList.date) {
      filteredResult = filteredResult.filter((article) =>
        article.content.pub_date.includes(textList.date)
      );
    }
    if (textList.country.length > 0) {
      const countryValues = textList.country.flatMap((c) => c.value);
      filteredResult = filteredResult.filter((article) =>
        countryValues.some((countryValue) =>
          article.content.abstract
            .toLowerCase()
            .includes(countryValue.toLowerCase())
        )
      );
    }
    setFilteredList(filteredResult);
  }, [textList, articleList]);

  return (
    <S.Container $isEmpty={isEmpty || isfilterEmpty}>
      <Nav textList={textList} changeText={changeText} resetData={null} />
      <S.Cards $isEmpty={isEmpty || isfilterEmpty}>
        {!isEmpty ? (
          !isfilterEmpty ? (
            filteredList?.map((data) => {
              return <Card key={data.content._id} data={data.content} />;
            })
          ) : (
            <Nothing text={"조건에 맞는 스크랩이 없습니다."} />
          )
        ) : (
          <Nothing text={"저장된 스크랩이 없습니다."} />
        )}
      </S.Cards>
    </S.Container>
  );
}

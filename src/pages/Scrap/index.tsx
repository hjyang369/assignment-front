import { S } from "./style";
//
import { useEffect, useState } from "react";
import { useArticleStore } from "store/articles";
import { useScrapFilterStore } from "store/scrapFilter";
import Nav from "components/Nav";
import Card from "../../components/Card";
import Nothing from "../../components/Nothing";
import { ArticlesDataType } from "types/article";

export default function Scrap() {
  const { articleList } = useArticleStore();
  const [filteredList, setFilteredList] =
    useState<ArticlesDataType[]>(articleList);
  const isEmpty = articleList.length === 0;
  const isFilterEmpty = filteredList.length === 0;

  const { textList, changeText } = useScrapFilterStore();

  useEffect(() => {
    let filteredResult = [...articleList];

    if (textList.title) {
      const lowerCaseTitle = textList.title.toLowerCase();
      filteredResult = filteredResult.filter((article) =>
        article.headline.main.toLowerCase().includes(lowerCaseTitle)
      );
    }
    if (textList.date) {
      filteredResult = filteredResult.filter((article) => {
        article.pub_date.includes(textList.date);
      });
    }
    if (textList.country.length > 0) {
      const countryValues = textList.country.flatMap((c) => c.value);
      filteredResult = filteredResult.filter((article) =>
        countryValues.some((countryValue) =>
          article.abstract.toLowerCase().includes(countryValue.toLowerCase())
        )
      );
    }
    setFilteredList(filteredResult);
  }, [textList, articleList]);

  return (
    <S.Container $isEmpty={isEmpty || isFilterEmpty}>
      <Nav textList={textList} changeText={changeText} resetData={undefined} />
      <S.Cards>
        {!isEmpty ? (
          !isFilterEmpty ? (
            filteredList?.map((data) => {
              return <Card key={data._id} data={data} />;
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

import { ArticlesDataType } from "types/article";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ArticleStore {
  articleList: ArticlesDataType[];
  idList: string[];
  addArticle: (val: ArticlesDataType) => void;
  removeArticle: (id: string) => void;
}

export const useArticleStore = create<ArticleStore>()(
  persist(
    (set) => ({
      articleList: [],
      idList: [],
      addArticle: (val) => {
        set((prev) => ({
          articleList: [...prev.articleList, val],
          idList: [...prev.idList, val._id],
        }));
        alert("기사를 스크랩했습니다.");
      },
      removeArticle: (id) => {
        set((prev) => ({
          articleList: prev.articleList.filter((e: any) => e._id !== id),
          idList: prev.idList.filter((e: string) => e !== id),
        }));
        alert("기사를 삭제 했습니다.");
      },
    }),
    {
      name: "article-storage",
    }
  )
);

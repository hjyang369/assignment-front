import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Article {
  content: object;
}

interface ArticleStore {
  articleList: Article[];
  idList: any[];
  addArticle: (val: object) => void;
  removeArticle: (id: string) => void;
}

export const useArticleStore = create<ArticleStore>()(
  persist(
    (set) => ({
      articleList: [],
      idList: [],
      addArticle: (val) => {
        set((prev) => ({
          articleList: [...prev.articleList, { content: val }],
          idList: [...prev.idList, val._id],
        }));
        alert("기사를 스크랩했습니다.");
      },
      removeArticle: (id) => {
        set((prev) => ({
          articleList: prev.articleList.filter(
            (e: any) => e.content._id !== id
          ),
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

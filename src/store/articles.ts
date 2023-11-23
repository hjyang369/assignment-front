import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Article {
  content: object;
}

interface ArticleStore {
  articleList: Article[];
  idList: string[];
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
        }));
      },
      removeArticle: (id) =>
        set((prev) => ({
          articleList: prev.articleList.filter(
            (e: any) => e.content._id !== id
          ),
        })),
    }),
    {
      name: "article-storage",
    }
  )
);

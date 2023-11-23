export const removeArticles = (id: string) => {
  const preList = JSON.parse(localStorage.getItem("articleList"));
  const newList = preList.filter((e: any) => e._id !== id);
  localStorage.setItem("articleList", JSON.stringify([...newList]));

  const preIdList = JSON.parse(localStorage.getItem("idList"));
  const newIdList = preIdList.filter((e: any) => e !== id);
  localStorage.setItem("idList", JSON.stringify([...newIdList]));
};

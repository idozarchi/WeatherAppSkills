const getSearchHistory = async (): Promise<string[]> => {
  return JSON.parse(localStorage.getItem("searchHistory") || "[]");
};

export default getSearchHistory;

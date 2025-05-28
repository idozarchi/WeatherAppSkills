import { useCallback } from "react";

export function useSearchHistory() {
  const getHistory = useCallback((): string[] => {
    return JSON.parse(localStorage.getItem("searchHistory") || "[]");
  }, []);

  const addToHistory = useCallback(
    (city: string) => {
      const history = getHistory();
      if (
        !history
          .map((c: string) => c.toLowerCase())
          .includes(city.toLowerCase())
      ) {
        history.unshift(city);
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(history.slice(0, 20))
        );
      }
    },
    [getHistory]
  );

  return { getHistory, addToHistory };
}

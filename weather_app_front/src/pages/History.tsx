import React from "react";
import HistoryContent from "../components/HistoryContent";
import { appContainerClass } from "../styles/tailwindStyles";

const History = () => (
  <div className={appContainerClass}>
    <HistoryContent
      title="Your Search History"
      loadingText="Loading your history..."
      emptyText="You have no search history yet."
    />
  </div>
);

export default History;

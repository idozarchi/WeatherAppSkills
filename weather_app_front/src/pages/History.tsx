import React from "react";
import HistoryContent from "../components/HistoryContent";
import { appContainerClass } from "../styles/tailwindStyles";

const History: React.FC = () => (
  <div className={appContainerClass}>
    <HistoryContent />
  </div>
);

export default History;

import React, { useEffect, useState } from "react";
import ScrollArea from "./ui/ScrollArea";
import getSearchHistory from "../api/getSearchHistory";
import { Card, CardContent } from "./ui/Card";
import Sonner from "./ui/Sonner"; // Import the Sonner component
import {
  containerClass,
  cardContentClass,
  titleClass,
  scrollAreaClass,
  loadingTextClass,
  emptyTextClass,
  listClass,
} from "../styles/tailwindStyles";

const USER_ID = "demo-user"; // Replace with real user id if available

const HistoryContent: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSearchHistory().then((data) => {
      setHistory(data.filter(Boolean));
      setLoading(false);
    });
  }, []);

  return (
    <div className={containerClass}>
      <Card>
        <CardContent className={cardContentClass}>
          <h2 className={titleClass}>Search History</h2>
          <ScrollArea className={scrollAreaClass}>
            {loading ? (
              <div className={loadingTextClass}>Loading...</div>
            ) : history.length === 0 ? (
              <div className={emptyTextClass}>No search history yet.</div>
            ) : (
              <ul className={listClass}>
                {history.map((item, idx) => (
                  <li key={idx}>
                    <Sonner>{item}</Sonner>
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryContent;

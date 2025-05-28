import React, { useEffect, useState } from "react";
import ScrollArea from "./ui/ScrollArea";
import { Card, CardContent } from "./ui/Card";
import Sonner from "./ui/Sonner";
import { Text } from "./ui/Typography";
import {
  containerClass,
  cardContentClass,
  titleClass,
  scrollAreaClass,
  loadingTextClass,
  emptyTextClass,
  listClass,
} from "../styles/tailwindStyles";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "../hooks/useSearchHistory";

interface HistoryContentProps {
  title?: string;
  loadingText?: string;
  emptyText?: string;
}

const HistoryContent: React.FC<HistoryContentProps> = ({
  title = "",
  loadingText = "Loading...",
  emptyText = "Nothing yet...",
}) => {
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { getHistory } = useSearchHistory();
  const navigate = useNavigate();

  useEffect(() => {
    setHistory(getHistory().filter(Boolean));
    setLoading(false);
  }, [getHistory]);

  const handleHistoryClick = (city: string) => {
    navigate("/", { state: { city } });
  };

  return (
    <div className={containerClass}>
      <Card>
        <CardContent className={cardContentClass}>
          <Text className={titleClass}>{title}</Text>
          <ScrollArea className={scrollAreaClass}>
            {loading ? (
              <Text className={loadingTextClass}>{loadingText}</Text>
            ) : history.length === 0 ? (
              <Text className={emptyTextClass}>{emptyText}</Text>
            ) : (
              <ul className={listClass}>
                {history.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleHistoryClick(item)}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <Sonner>{item}</Sonner>
                    </button>
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

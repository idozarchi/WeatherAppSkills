import React, { useEffect, useState } from "react";
import ScrollArea from "./ui/ScrollArea";
import getSearchHistory from "../api/getSearchHistory";
import { Card, CardContent } from "./ui/Card";
import Sonner from "./ui/Sonner"; // Import the Sonner component

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
    <div className="w-full max-w-lg mx-auto mt-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 mt-4">Search History</h2>
          <ScrollArea className="bg-white rounded shadow p-4">
            {loading ? (
              <div className="text-gray-400">Loading...</div>
            ) : history.length === 0 ? (
              <div className="text-gray-500">No search history yet.</div>
            ) : (
              <ul className="space-y-2">
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

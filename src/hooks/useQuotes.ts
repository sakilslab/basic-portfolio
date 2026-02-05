import { useState, useEffect } from "react";

export interface Quote {
  text: string;
  author: string;
  isBangla: boolean;
}

export const useQuotes = (): Quote[] => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data: Quote[]) => {
        setQuotes(data.filter((q) => q.text && q.author));
      });
  }, []);

  return quotes;
};

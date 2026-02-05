import { useState, useEffect } from "react";

export interface Quote {
  text: string;
  author: string;
  isBangla: boolean;
}

export const useQuotes = (): Quote[] => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("/quotes.md")
      .then((res) => res.text())
      .then((text) => {
        const quoteBlocks = text.split("## Quote").slice(1);
        
        const parsedQuotes = quoteBlocks.map((block) => {
          const textMatch = block.match(/- text: (.+)/);
          const authorMatch = block.match(/- author: (.+)/);
          const langMatch = block.match(/- lang: (.+)/);
          
          return {
            text: textMatch?.[1]?.trim() || "",
            author: authorMatch?.[1]?.trim() || "",
            isBangla: langMatch?.[1]?.trim() === "bn",
          };
        }).filter((q) => q.text && q.author);
        
        setQuotes(parsedQuotes);
      });
  }, []);

  return quotes;
};

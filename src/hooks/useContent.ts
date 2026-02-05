import { useState, useEffect } from "react";

interface SiteContent {
  heroIntroduction: string;
  quotesTitle: string;
  quotesSubtitle: string;
}

export const useContent = (): SiteContent => {
  const [content, setContent] = useState<SiteContent>({
    heroIntroduction: "",
    quotesTitle: "",
    quotesSubtitle: "",
  });

  useEffect(() => {
    fetch("/content.md")
      .then((res) => res.text())
      .then((text) => {
        // Parse markdown content
        const introMatch = text.match(/### Introduction\n([^\n#]+)/);
        const titleMatch = text.match(/### Title\n([^\n#]+)/);
        const subtitleMatch = text.match(/### Subtitle\n([^\n#]+)/);

        setContent({
          heroIntroduction: introMatch?.[1]?.trim() || "",
          quotesTitle: titleMatch?.[1]?.trim() || "",
          quotesSubtitle: subtitleMatch?.[1]?.trim() || "",
        });
      });
  }, []);

  return content;
};

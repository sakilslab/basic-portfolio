import { useState, useEffect } from "react";

interface SiteContent {
  heroIntroduction: string;
  quotesTitle: string;
  quotesSubtitle: string;
  footerCopyright: string;
}

export const useContent = (): SiteContent => {
  const [content, setContent] = useState<SiteContent>({
    heroIntroduction: "",
    quotesTitle: "",
    quotesSubtitle: "",
    footerCopyright: "",
  });

  useEffect(() => {
    fetch("/content.md")
      .then((res) => res.text())
      .then((text) => {
        // Parse markdown content
        const introMatch = text.match(/### Introduction\n([^\n#]+)/);
        const titleMatch = text.match(/### Title\n([^\n#]+)/);
        const subtitleMatch = text.match(/### Subtitle\n([^\n#]+)/);
        const copyrightMatch = text.match(/### Copyright\n([^\n#]+)/);

        setContent({
          heroIntroduction: introMatch?.[1]?.trim() || "",
          quotesTitle: titleMatch?.[1]?.trim() || "",
          quotesSubtitle: subtitleMatch?.[1]?.trim() || "",
          footerCopyright: copyrightMatch?.[1]?.trim() || "",
        });
      });
  }, []);

  return content;
};

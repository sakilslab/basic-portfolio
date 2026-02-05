import { useState, useEffect } from "react";

interface SocialLink {
  platform: string;
  href: string;
}

interface SiteContent {
  heroIntroduction: string;
  heroImage: string;
  quotesTitle: string;
  quotesSubtitle: string;
  footerCopyright: string;
  socialLinks: SocialLink[];
}

interface ContentJson {
  hero: {
    introduction: string;
    image: string;
  };
  quotes: {
    title: string;
    subtitle: string;
  };
  footer: {
    copyright: string;
  };
  socialLinks: SocialLink[];
}

export const useContent = (): SiteContent => {
  const [content, setContent] = useState<SiteContent>({
    heroIntroduction: "",
    heroImage: "",
    quotesTitle: "",
    quotesSubtitle: "",
    footerCopyright: "",
    socialLinks: [],
  });

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data: ContentJson) => {
        setContent({
          heroIntroduction: data.hero?.introduction || "",
          heroImage: data.hero?.image || "",
          quotesTitle: data.quotes?.title || "",
          quotesSubtitle: data.quotes?.subtitle || "",
          footerCopyright: data.footer?.copyright || "",
          socialLinks: data.socialLinks || [],
        });
      });
  }, []);

  return content;
};

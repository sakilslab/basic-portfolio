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
    fetch("/content.md")
      .then((res) => res.text())
      .then((text) => {
        const introMatch = text.match(/### Introduction\n([^\n#]+)/);
        const imageMatch = text.match(/### Image\n([^\n#]+)/);
        const titleMatch = text.match(/### Title\n([^\n#]+)/);
        const subtitleMatch = text.match(/### Subtitle\n([^\n#]+)/);
        const copyrightMatch = text.match(/### Copyright\n([^\n#]+)/);
        
        // Parse social links
        const facebookMatch = text.match(/### Facebook\n([^\n#]+)/);
        const instagramMatch = text.match(/### Instagram\n([^\n#]+)/);
        const linkedinMatch = text.match(/### LinkedIn\n([^\n#]+)/);
        const twitterMatch = text.match(/### Twitter\n([^\n#]+)/);
        
        const socialLinks: SocialLink[] = [];
        if (facebookMatch?.[1]) socialLinks.push({ platform: "Facebook", href: facebookMatch[1].trim() });
        if (instagramMatch?.[1]) socialLinks.push({ platform: "Instagram", href: instagramMatch[1].trim() });
        if (linkedinMatch?.[1]) socialLinks.push({ platform: "LinkedIn", href: linkedinMatch[1].trim() });
        if (twitterMatch?.[1]) socialLinks.push({ platform: "Twitter", href: twitterMatch[1].trim() });

        setContent({
          heroIntroduction: introMatch?.[1]?.trim() || "",
          heroImage: imageMatch?.[1]?.trim() || "",
          quotesTitle: titleMatch?.[1]?.trim() || "",
          quotesSubtitle: subtitleMatch?.[1]?.trim() || "",
          footerCopyright: copyrightMatch?.[1]?.trim() || "",
          socialLinks,
        });
      });
  }, []);

  return content;
};

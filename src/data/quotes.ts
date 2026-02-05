export interface Quote {
  text: string;
  author: string;
  isBangla?: boolean;
}

export const quotes: Quote[] = [
  {
    text: "স্বপ্ন সেটা নয় যা তুমি ঘুমিয়ে দেখো, স্বপ্ন হলো সেটা যা তোমাকে ঘুমাতে দেয় না।",
    author: "এ.পি.জে. আব্দুল কালাম",
    isBangla: true,
  },
  {
    text: "যে লড়াই করে সে হারতে পারে, কিন্তু যে লড়াই করে না সে ইতিমধ্যেই হেরে গেছে।",
    author: "বার্তল্ট ব্রেখট",
    isBangla: true,
  },
  {
    text: "Design is not just what it looks like, design is how it works.",
    author: "Steve Jobs",
    isBangla: false,
  },
  {
    text: "জীবন হল সাইকেল চালানোর মতো। ভারসাম্য বজায় রাখতে হলে চলতে থাকতে হবে।",
    author: "আলবার্ট আইনস্টাইন",
    isBangla: true,
  },
  {
    text: "সফলতা চূড়ান্ত নয়, ব্যর্থতা মারাত্মক নয়: এটি সাহস যা গণনা করে।",
    author: "উইনস্টন চার্চিল",
    isBangla: true,
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    isBangla: false,
  },
  {
    text: "তোমার সময় সীমিত, তাই অন্যের জীবন যাপন করে এটি নষ্ট করো না।",
    author: "স্টিভ জবস",
    isBangla: true,
  },
  {
    text: "Move fast and break things.",
    author: "Mark Zuckerberg",
    isBangla: false,
  },
  {
    text: "কঠিন সময় কখনো স্থায়ী হয় না, কিন্তু কঠিন মানুষ হয়।",
    author: "রবার্ট এইচ. শুলার",
    isBangla: true,
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    isBangla: false,
  },
];

import { Work } from "../types/work";

export const works: Work[] = [
  {
    title: "Rhythmate",
    description:
      "新しい習慣をゲーム感覚で楽しく身に付けられるアプリです。毎日続けるとプレイヤーレベルがアップしたり、特別なバッチを受け取ることができます。チーム開発ハッカソンにて開発し、主にデザインからフロントエンドを担当しました。",
    image: "Rhythmate.png",
    link: "https://github.com/taga3s/Rhythmate-Web",
    stack: ["React", "TypeScript"],
  },
  {
    title: "サヤの豆知識",
    description:
      "私の雑記ブログです。デザインからコーディング、デプロイまで全て一人で行った作品です。今後は、UI/UX改善や、microCMSを使用したSEO対策に関するアップデートを予定しています。",
    image: "sy-mame-blog.png",
    link: "https://sy-mame-blog.vercel.app/",
    stack: ["Next.js", "TypeScript", "microCMS"],
  },
  {
    title: "pinmoo",
    description:
      "今の気分をシェアする感情日記SNSアプリです。デザインからコーディング、デプロイまで全て一人で行った作品です。現在は提供が終了しています。今後大幅刷新を行い、再リリースを予定しています。",
    image: "pinmoo.png",
    link: "https://github.com/mamenz752/pinmoo",
    stack: ["JavaScript", "React", "PHP", "Laravel"],
  },
];

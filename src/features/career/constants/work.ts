import { Work } from "../types/work";

export const works: Work[] = [
  {
    title: "Rhythmate",
    description:
      "新しい習慣をゲーム感覚で楽しく身に付けられるアプリです。毎日続けるとプレイヤーレベルがアップしたり、特別なバッチを受け取ることができます。また、習慣がどれだけ続いたか統計情報を表示させ、AIによるレビューを受け取ることもできます。",
    image: "/Rhythmate.png",
    link: "https://github.com/taga3s/Rhythmate-Web",
    stack: ["React", "TypeScript"],
  },
  {
    title: "サヤの豆知識",
    description:
      "私の雑記ブログです。まだ作りたてほやほやなので、レスポンシブ対応などできていない点もたくさんありますが、デザインからコーディング、デプロイまで全て一人で行った初めての作品です。",
    image: "/sy-mame-blog.png",
    link: "https://sy-mame-blog.vercel.app/",
    stack: ["Next.js", "TypeScript", "microCMS"],
  },
];

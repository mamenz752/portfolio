import { AboutSkillsBeingLearnedItem } from "./components/AboutSkillsBeingLearnedItem";

type Skill = {
  skill: string;
  description: string;
};

export const AboutSkillsBeingLearned = () => {
  const allSkills: Skill[] = [
    {
      skill: "UI/UX Design",
      description:
        "Webデザインに興味があり、勉強を続けています。Miroなどを用いてブレインストーミングを行った後、Figmaでデザインカンプを作成し、なるだけ制作物のイメージを細かく膨らませるように意識しています。",
    },
    {
      skill: "HTML/CSS",
      description:
        "セマンティックなコードを書くように意識しています。現在は、メディアクエリを用いたレスポンシブデザインやCSSアニメーションについての理解を深めています。Reactなどと併用する際はTailwind CSSを利用しています。",
    },
    {
      skill: "JavaScript/TypeScript",
      description:
        "フロントエンドにおいて、React + TypeScriptを用いたプロダクト開発経験があります。個人開発では、TypeScriptを積極的に採用しています。Next.jsを用いたJamstackのプロダクトを開発したいと考えています。また、バックエンドにおけるTypeScriptを用いた型安全な開発に興味があり、T3 Stackについて勉強中です。",
    },
    {
      skill: "PHP",
      description:
        "Laravelを用いたプロダクトを個人開発した経験があります。Inertia.jsを用いてReactと連携させて開発しました。",
    },
    {
      skill: "Python",
      description:
        "主にDS/ML分野の学習で使用し、Pythonによるデータ分析技術を学んでいます。Web開発分野においては、Djangoを使ったプロダクトの開発にも興味があります。",
    },
  ];

  return (
    <ul className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4">
      {allSkills.map((item, index) => (
        <AboutSkillsBeingLearnedItem
          key={index}
          skill={item.skill}
          description={item.description}
        />
      ))}
    </ul>
  );
};

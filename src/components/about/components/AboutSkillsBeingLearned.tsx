import { AboutSkillsBeingLearnedItem } from "./AboutSkillsBeingLearnedItem";

type Skill = {
  skill: string;
  description: string;
};

export const AboutSkillsBeingLearned = () => {
  const allSkills: Skill[] = [
    {
      skill: "HTML/CSS",
      description:
        "HTMLは得意です。セマンティックなタグを書くように心がけています。",
    },
    {
      skill: "JS/TS",
      description:
        "JavaScript, TypeScriptはフロントエンドが書き慣れています。バックエンドはあまり書いたことがなく勉強中です。",
    },
    {
      skill: "React/Next.js",
      description:
        "Reactを使い制作物を作ったことがあります。このサイトもReactでできています。",
    },
    {
      skill: "Python",
      description:
        "DS/ML分野の学習で使用します。現在、東大松尾研究室主催のGCI Summer 2024に参加しており、Pythonによるデータ分析技術を学んでいます。",
    },
  ];

  return (
    <ul className="w-full grid grid-cols-2 gap-4">
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

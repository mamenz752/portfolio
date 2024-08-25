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
        "なるだけ制作物のイメージを細かく膨らませるように意識しています。ブレインストーミングを行うなどしてアイデアをコンセプトにまとめた後、Figmaを用いてデザイン案を作成します。",
    },
    {
      skill: "System Design",
      description:
        "フルスタックに開発できるようなスキル獲得を目指しているため、アーキテクチャについての理解を深めています。現在はJamstackやT3 Stackについて個人開発を進めながら勉強中です。",
    },
    {
      skill: "HTML5",
      description: "セマンティックなコードを書くように意識しています。",
    },
    {
      skill: "CSS3",
      description:
        "最近は、CSSアニメーションについて興味があります。Reactなどと併用する際は、Tailwind CSSを利用することが多いです。",
    },
    {
      skill: "JavaScript",
      description:
        "Node.jsを用いて開発を行っています。Reactを用いたフロントエンド開発が得意です。最近は、バックエンド領域についても勉強しています。",
    },
    {
      skill: "TypeScript",
      description:
        "個人開発では、TypeScriptを積極的に採用しています。フロントエンドにおいて、React + TypeScriptを用いたプロダクト開発経験があります。",
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

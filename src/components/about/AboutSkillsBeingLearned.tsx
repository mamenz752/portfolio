import { AboutSkillsBeingLearnedItem } from "./components/AboutSkillsBeingLearnedItem";

type Skill = {
  skill: string;
  description: string;
};

export const AboutSkillsBeingLearned = () => {
  const allSkills: Skill[] = [
    {
      skill: "HTML/CSS",
      description:
        "元々はWebデザインにとても興味があったので、HTML/CSSを書くのは得意です。最近はReactと併用して、Tailwind CSSでスタイルを実装することが多いです。特に、セマンティックなコードを書くように意識しています。",
    },
    {
      skill: "JavaScript/TypeScript",
      description:
        "最近はJavaScriptを1から勉強し直しています。ReactとTypeScriptを使用してプロダクトを作成した経験があります。個人的にはTypeScriptの方が好みです。Node.jsを使用したバックエンドは書いたことがありませんが、興味はあります。",
    },
    {
      skill: "PHP",
      description:
        "現在バックエンドの勉強をするためにLaravelを使用したプロダクトを個人開発中です。",
    },
    {
      skill: "Python",
      description:
        "主にDS/ML分野の学習で使用しています。現在、東京大学グローバル消費インテリジェンス寄付講座GCI Summer 2024に参加しており、Pythonによるデータ分析技術を学んでいます。またDjangoを使ったプロダクトの開発にも興味があります。",
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

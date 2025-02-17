import { AboutMySkillItem } from "../components/AboutMySkillItem";
import { allSkills } from "../constants/skill";

export const AboutMySkill = () => {
  return (
    <ul className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4">
      {allSkills.map((item, index) => (
        <AboutMySkillItem
          key={index}
          skill={item.skill}
          description={item.description}
        />
      ))}
    </ul>
  );
};

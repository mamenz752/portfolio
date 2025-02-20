import { experiences } from "../constants/experience";
import { CareerExperienceListItem } from "./CareerExperienceListItem";

export const CareerExperienceList = () => {
  return (
    <ul className="flex flex-col gap-8 text-mamenz-blue font-bold tracking-widest font-zen-kaku">
      {experiences.map((experience, index) => (
        <CareerExperienceListItem
          key={index}
          date={experience.date}
          title={experience.title}
          description={experience.description}
        />
      ))}
    </ul>
  );
};

import { Headings } from "@/components/common/components/Headings";
import { AboutSkillsBeingLearned } from "./AboutSkillsBeingLearned";
import AboutBasicInfo from "./AboutBasicInfo";

export const AboutPresenter = () => {
  return (
    <div className="w-1/2 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" color="" />
      <AboutBasicInfo />
      <Headings
        en="SKILLS BEING LEARNED"
        ja="学んでいる技術"
        size="S"
        color=""
      />
      <AboutSkillsBeingLearned />
    </div>
  );
};

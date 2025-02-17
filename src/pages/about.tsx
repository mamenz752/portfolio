import { Headings } from "@/components/common/components/Headings";
import { AboutSkillsBeingLearned } from "@/components/about/AboutSkillsBeingLearned";
import AboutBasicInfo from "@/components/about/AboutBasicInfo";

export const About = () => {
  return (
    <div className="w-1/2 max-lg:w-2/3 max-md:w-3/4 mx-auto my-10 flex justify-center items-start flex-col">
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

export default About;

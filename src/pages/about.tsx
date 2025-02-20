import { Headings } from "@/components/common/components/Headings";
import { AboutMe } from "@/features/about/pages/AboutMe";
import { AboutMySkill } from "@/features/about/pages/AboutMySkill";

export const About = () => {
  return (
    <div className="w-1/2 max-lg:w-2/3 max-md:w-3/4 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" color="" />
      <AboutMe />
      <Headings
        en="SKILLS BEING LEARNED"
        ja="学んでいる技術"
        size="S"
        color=""
      />
      <AboutMySkill />
    </div>
  );
};

export default About;

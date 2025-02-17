import { CareerLicense } from "@/components/career/components/CareerLicense";
import CareerExperience from "@/components/career/components/CareerExperience";
import CareerWorks from "@/components/career/components/CareerWorks";
import { Headings } from "@/components/common/components/Headings";
import CareerSquare from "@/components/career/components/CareerSquare";

const Career = () => {
  return (
    <div className="w-1/2 max-lg:w-2/3 max-md:w-3/4 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="CAREER" ja="私の経歴" size="N" color="blue" />
      <CareerSquare />
      <CareerLicense />
      <CareerSquare />
      <CareerExperience />
      <CareerSquare />
      <CareerWorks />
    </div>
  );
};

export default Career;

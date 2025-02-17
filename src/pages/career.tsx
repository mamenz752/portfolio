import { CareerLicense } from "@/features/career/components/CareerLicense";
import CareerExperience from "@/features/career/components/CareerExperience";
import CareerWorks from "@/features/career/components/CareerWorks";
import { Headings } from "@/components/common/components/Headings";
import CareerSquare from "@/features/career/components/CareerSquare";
// import { CareerLayout } from "@/features/career/layout/layout";

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
      {/* <CareerLayout>
        <CareerWorks />
      </CareerLayout> */}
    </div>
  );
};

export default Career;

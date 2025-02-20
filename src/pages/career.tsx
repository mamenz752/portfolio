import { CareerLicense } from "@/features/career/pages/CareerLicense";
import { CareerExperience } from "@/features/career/pages/CareerExperience";
import { CareerWork } from "@/features/career/pages/CareerWork";
import { Headings } from "@/components/common/components/Headings";
import { CareerLayout } from "@/features/career/layout/layout";

const Career = () => {
  return (
    <div className="w-1/2 max-lg:w-2/3 max-md:w-3/4 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="CAREER" ja="私の経歴" size="N" color="blue" />
      <CareerLayout>
        <CareerLicense />
      </CareerLayout>
      <CareerLayout>
        <CareerExperience />
      </CareerLayout>
      <CareerLayout>
        <CareerWork />
      </CareerLayout>
    </div>
  );
};

export default Career;

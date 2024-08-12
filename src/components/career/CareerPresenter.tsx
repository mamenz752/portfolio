import { CareerLicense } from "./components/CareerLicense";
import CareerExperience from "./components/CareerExperience";
import CareerWorks from "./components/CareerWorks";
import { Headings } from "@/components/common/components/Headings";
import CareerSquare from "./components/CareerSquare";

export const CareerPresenter = () => {
  return (
    <div className="w-1/2 mx-auto my-10 flex justify-center items-start flex-col">
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

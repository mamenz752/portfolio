import { Headings } from "@/components/common/components/Headings";
import { CareerExperienceList } from "../components/CareerExperienceList";

const CareerExperience = () => {
  return (
    <div className="py-6">
      <Headings en="EXPERIENCE" ja="コンペ参加経験など" size="S" color="pink" />
      <CareerExperienceList />
    </div>
  );
};

export default CareerExperience;

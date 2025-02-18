import { Headings } from "@/components/common/components/Headings";
import { CareerWorkList } from "../components/CareerWorkList";

const CareerWorks = () => {
  return (
    <div>
      <div className="py-4">
        <Headings en="WORKS" ja="作品・実績" size="S" color="pink" />
      </div>
      <CareerWorkList />
    </div>
  );
};

export default CareerWorks;

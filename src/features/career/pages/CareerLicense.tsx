import { Headings } from "@/components/common/components/Headings";
import { CareerLicenseList } from "../components/CareerLicenseList";

export const CareerLicense = () => {
  return (
    <div className="py-6">
      <Headings en="LICENSE" ja="資格" size="S" color="pink" />
      <CareerLicenseList />
    </div>
  );
};

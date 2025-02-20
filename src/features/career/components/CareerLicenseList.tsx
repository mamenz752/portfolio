import { licenses } from "../constants/license";
import { CareerLicenseListItem } from "./CareerLicenseListItem";

export const CareerLicenseList = () => {
  return (
    <ul className="ml-8 flex flex-col gap-8 text-mamenz-blue text-lg font-bold list-[circle] tracking-widest">
      {licenses.map((license, index) => (
        <CareerLicenseListItem key={index} name={license.name} />
      ))}
    </ul>
  );
};

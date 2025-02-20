import { License } from "../types/license";

export const CareerLicenseListItem = (props: License) => {
  const { name } = props;

  return (
    <li>
      <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
        {name}
      </span>
    </li>
  );
};

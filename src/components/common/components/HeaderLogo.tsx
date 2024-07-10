import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link to="/">
      <div className="w-24 max-md:w-18 max-sm:w-16">
        <img src="./logo.png" alt="mamenz752のlogo" />
      </div>
    </Link>
  );
};

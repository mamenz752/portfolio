import { Link } from "react-router-dom";
import { HeaderLink } from "./header/components/HeaderLink";

export const Header = () => {
  return (
    <header className="flex items-center justify-around bg-mamenz-blue">
      <Link to="/">
        <div className="w-24">
          <img src="./logo.png" alt="mamenz752のlogo" />
        </div>
      </Link>
      <HeaderLink />
    </header>
  );
};

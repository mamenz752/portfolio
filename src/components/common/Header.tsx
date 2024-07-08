import { HeaderLink } from "./components/HeaderLink";
import { HeaderLogo } from "./components/HeaderLogo";

export const Header = () => {
  return (
    <header className="flex items-center justify-around bg-mamenz-blue">
      <HeaderLogo />
      <HeaderLink />
    </header>
  );
};

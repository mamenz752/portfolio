import { HeaderLinkItem } from "./HeaderLinkItem";

export const HeaderLink = () => {
  return (
    <ul className="flex gap-6 font-m-plus font-medium text-xl tracking-[0.2rem] text-white">
      <HeaderLinkItem href="/" type="HOME" />
      <HeaderLinkItem href="/about" type="ABOUT" />
      <HeaderLinkItem href="/career" type="CAREER" />
      <HeaderLinkItem href="/techlog" type="TECHLOG" />
    </ul>
  );
};

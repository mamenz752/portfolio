import { HeaderLinkItem } from "./HeaderLinkItem";

export const HeaderLink = () => {
  return (
    <ul className="flex gap-6 max-md:gap-2 font-m-plus font-medium text-xl max-md:text-lg tracking-[0.2rem] max-md:tracking-wider text-white">
      <HeaderLinkItem href="/" type="HOME" />
      <HeaderLinkItem href="/about" type="ABOUT" />
      <HeaderLinkItem href="/career" type="CAREER" />
      <HeaderLinkItem href="/contact" type="CONTACT" />
    </ul>
  );
};

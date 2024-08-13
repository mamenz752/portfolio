import { HeaderLinkItem } from "./HeaderLinkItem";

export const HeaderLink = () => {
  return (
    <ul className="max-md:mt-4 px-4 max-md:pb-4 flex max-lg:flex-col max-lg:pb-4 gap-6 max-md:gap-2 font-m-plus font-medium text-xl max-md:text-lg tracking-[0.2rem] max-md:tracking-wider text-white">
      <HeaderLinkItem href="/" type="HOME" />
      <HeaderLinkItem href="/about" type="ABOUT" />
      <HeaderLinkItem href="/career" type="CAREER" />
      <HeaderLinkItem href="/contact" type="CONTACT" />
    </ul>
  );
};

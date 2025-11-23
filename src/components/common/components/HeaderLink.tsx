import { HeaderLinkItem } from "./HeaderLinkItem";

type Props = {
  closeMenu: () => void;
};

export const HeaderLink = ({ closeMenu }: Props) => {
  return (
    <ul className="max-md:mt-4 px-4 max-md:pb-4 flex max-lg:flex-col max-lg:pb-4 gap-6 max-md:gap-2 font-m-plus font-medium text-xl max-md:text-lg tracking-[0.2rem] max-md:tracking-wider text-white">
      <HeaderLinkItem href="/" type="HOME" closeMenu={closeMenu} />
      <HeaderLinkItem href="/about" type="ABOUT" closeMenu={closeMenu} />
      <HeaderLinkItem href="/career" type="CAREER" closeMenu={closeMenu} />
      <HeaderLinkItem href="/contact" type="CONTACT" closeMenu={closeMenu} />
    </ul>
  );
};

import { useMedia } from "use-media";
import HamburgerIcon from "./components/HamburgerIcon";
import { HeaderLink } from "./components/HeaderLink";
import { HeaderLogo } from "./components/HeaderLogo";
import { useState } from "react";

export const Header = () => {
  const isTablet = useMedia({ maxWidth: "1024px" });
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const closeMenu = () => setIsHamburgerOpen(false);

  return (
    <header className="px-4 bg-mamenz-blue">
      <div className="flex items-center justify-around max-md:justify-between">
        <HeaderLogo />
        {isTablet ? (
          <HamburgerIcon
            isOpenMenu={isHamburgerOpen}
            isOpenFunc={setIsHamburgerOpen}
          />
        ) : (
          <HeaderLink closeMenu={closeMenu} />
        )}
      </div>
      {isHamburgerOpen && isTablet && <HeaderLink closeMenu={closeMenu} />}
    </header>
  );
};

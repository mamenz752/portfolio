import { FC } from "react";

type Props = {
  isOpenMenu: boolean;
  isOpenFunc: (isOpen: boolean) => void;
};

const HamburgerIcon: FC<Props> = ({ isOpenMenu, isOpenFunc }) => {
  const handleNavOpen = () => {
    isOpenFunc(true);
  };

  const handleNavClose = () => {
    isOpenFunc(false);
  };

  return isOpenMenu ? (
    <button onClick={handleNavClose}>
      <i className="fa-solid fa-xmark text-white text-4xl max-sm:text-2xl"></i>
    </button>
  ) : (
    <button onClick={handleNavOpen}>
      <i className="fa-solid fa-bars text-white text-4xl max-sm:text-2xl"></i>
    </button>
  );
};

export default HamburgerIcon;

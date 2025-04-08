import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

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
      <FontAwesomeIcon
        icon={faXmark}
        className="text-white text-4xl max-sm:text-2xl"
      />
    </button>
  ) : (
    <button onClick={handleNavOpen}>
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-4xl max-sm:text-2xl"
      />
    </button>
  );
};

export default HamburgerIcon;

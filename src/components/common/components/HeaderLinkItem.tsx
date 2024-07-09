import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  type: string;
};

export const HeaderLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li className="relative after:absolute after:top-1/2 after:left-[-10%] after:hover:w-[120%] after:hover:h-[2px] after:hover:bg-white after:hover:animate-animate-line">
      <Link to={href}>{type}</Link>
    </li>
  );
};

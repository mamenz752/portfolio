import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  type: string;
};

export const HeaderLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li>
      <Link className="" to={href}>
        {type}
      </Link>
    </li>
  );
};

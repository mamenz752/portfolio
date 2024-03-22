import { Icon } from "@/components/common/components/Icon";
import { FC } from "react";

type Props = {
  href: string;
  type: string;
};

export const AboutLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li className="w-16 h-16 bg-[#555779]">
      <a
        className="w-full h-full flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type={type} />
      </a>
    </li>
  );
};

import { ContactIcon } from "@/components/common/components/ContactIcon";
import { FC } from "react";

type Props = {
  href: string;
  type: string;
};

export const AboutLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li className="w-16 h-16 max-md:w-12 max-md:h-12 bg-[#555779]">
      <a
        className="w-full h-full flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIcon type={type} />
      </a>
    </li>
  );
};

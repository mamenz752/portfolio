import { FC } from "react";

type Props = {
  href: string;
  type: string;
};

export const AboutOtherLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li className="w-1/3 bg-[#555779] text-white text-lg font-m-plus font-medium tracking-widest">
      <a
        className="p-4 flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type}
      </a>
    </li>
  );
};

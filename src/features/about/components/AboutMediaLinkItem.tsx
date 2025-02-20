import { FC } from "react";

type Props = {
  href: string;
  type: string;
};

export const AboutMediaLinkItem: FC<Props> = ({ href, type }) => {
  return (
    <li className="w-1/3 max-md:w-full bg-[#555779] text-white text-lg max-lg:text-md font-m-plus font-medium tracking-widest">
      <a
        className="p-4 max-lg:p-3 flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type}
      </a>
    </li>
  );
};

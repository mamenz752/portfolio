import { FC } from "react";

type Props = {
  type: string;
};

export const ContactIcon: FC<Props> = ({ type }) => {
  return (
    <i className={`fa-brands ${type} text-white text-4xl max-md:text-2xl`} />
  );
};

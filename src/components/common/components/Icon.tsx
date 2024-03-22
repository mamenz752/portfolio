import { FC } from "react";

type Props = {
  type: string;
};

export const Icon: FC<Props> = ({ type }) => {
  return <i className={`fa-brands ${type} text-white text-4xl`} />;
};

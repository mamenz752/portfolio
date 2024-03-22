import { FC } from "react";

type Size = "S" | "N";

type Props = {
  en: string;
  ja: string;
  size: Size;
};

export const Headings: FC<Props> = ({ en, ja, size }) => {
  const handleEnSize = (size: Size) => {
    if (size === "S") {
      return "text-2xl";
    } else {
      return "text-[2rem]";
    }
  };

  const handleJaSize = (size: Size) => {
    if (size === "S") {
      return "text-2xl";
    } else {
      return "text-base";
    }
  };

  return (
    <div className="section-title">
      <h1 className={`${handleEnSize(size)}`}>{en}</h1>
      <p className={`${handleJaSize(size)}`}>{ja}</p>
    </div>
  );
};

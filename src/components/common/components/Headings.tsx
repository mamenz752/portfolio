import { FC } from "react";

type Size = "S" | "N";

type Props = {
  en: string;
  ja: string;
  size: Size;
  color: string;
};

export const Headings: FC<Props> = ({ en, ja, size, color }) => {
  const handleEnSize = (size: Size) => {
    if (size === "S") {
      return "text-2xl";
    } else {
      return "text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem]";
    }
  };

  const handleJaSize = (size: Size) => {
    if (size === "S") {
      return "text-base";
    } else {
      return "text-xl max-md:text-[1.2rem] max-sm:text-base";
    }
  };

  const handleColor = (color: string) => {
    switch (color) {
      case "white":
        return "text-white";
      case "blue":
        return "text-mamenz-blue";
      case "pink":
        return "text-mamenz-pink";
      default:
        return "text-mamenz-blue";
    }
  };

  return (
    <div className="mt-2 mb-8 flex items-center gap-10 max-md:gap-6 max-sm:gap-4 text-mamenz-blue">
      <h1
        className={`${handleEnSize(size)} font-m-plus font-bold tracking-widest max-md:tracking-wider max-sm:tracking-wide ${handleColor(color)}`}
      >
        {en}
      </h1>
      <p
        className={`${handleJaSize(size)} font-zen-kaku font-bold tracking-widest max-md:tracking-wider max-sm:tracking-wide ${handleColor(color)}`}
      >
        {ja}
      </p>
    </div>
  );
};

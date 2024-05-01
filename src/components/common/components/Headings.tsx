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
      return "text-[2rem]";
    }
  };

  const handleJaSize = (size: Size) => {
    if (size === "S") {
      return "text-base";
    } else {
      return "text-xl";
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
    <div className="mt-2 mb-8 flex justify-center items-center gap-10 text-mamenz-blue">
      <h1
        className={`${handleEnSize(size)} font-m-plus font-bold tracking-widest ${handleColor(color)}`}
      >
        {en}
      </h1>
      <p
        className={`${handleJaSize(size)} font-zen-kaku font-bold tracking-widest ${handleColor(color)}`}
      >
        {ja}
      </p>
    </div>
  );
};

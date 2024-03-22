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
      return "text-base";
    } else {
      return "text-xl";
    }
  };

  return (
    <div className="mt-2 mb-8 flex justify-center items-center gap-10 text-mamenz-blue">
      <h1
        className={`${handleEnSize(size)} font-m-plus font-bold tracking-widest`}
      >
        {en}
      </h1>
      <p
        className={`${handleJaSize(size)} font-zen-kaku font-bold tracking-widest`}
      >
        {ja}
      </p>
    </div>
  );
};

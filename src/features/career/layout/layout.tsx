import CareerSquare from "../components/CareerSquare";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const CareerLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CareerSquare />
      {children}
    </>
  );
};

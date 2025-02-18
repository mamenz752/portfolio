import { works } from "../constants/work";
import { CareerWorkListItem } from "./CareerWorkListItem";

export const CareerWorkList = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button className="w-[10%] h-24 flex justify-center items-center bg-mamenz-blue">
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>
      <ul className="w-[80%]">
        {works.map((work, index) => (
          <CareerWorkListItem
            key={index}
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
            stack={work.stack}
          />
        ))}
      </ul>
      <button className="w-[10%] h-24 flex justify-center items-center bg-mamenz-blue">
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

import { FC, useState } from "react";

type Props = {
  skill: string;
  description: string;
};

export const AboutSkillsBeingLearnedItem: FC<Props> = ({
  skill,
  description,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleIsHidden = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <li>
      <button
        className="w-full h-16 bg-mamenz-blue text-white font-m-plus text-xl flex items-center justify-center relative"
        onClick={() => handleIsHidden()}
      >
        <span className="tracking-widest text-center">{skill}</span>
        <svg
          className="w-6 h-6 text-white absolute right-4"
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
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`h-48 p-4 ${isHidden ? "" : "hidden"} text-mamenz-blue tracking-widest border-2 border-mamenz-blue`}
      >
        <p>{description}</p>
      </div>
    </li>
  );
};

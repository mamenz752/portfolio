import { useState } from "react";

export const AboutSkillsBeingLearned = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleIsHidden = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <ul className="w-full grid grid-cols-2 gap-4">
      <li className="border-2 border-mamenz-blue">
        <button
          className="w-full h-16 bg-mamenz-blue text-white font-m-plus text-xl flex items-center justify-center relative"
          onClick={() => handleIsHidden()}
        >
          <span className="tracking-widest text-center">HTML / CSS</span>
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
          className={`p-4 ${isHidden ? "" : "hidden"} text-mamenz-blue tracking-widest`}
        >
          <p>
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
            スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明スキルの説明
          </p>
        </div>
      </li>
    </ul>
  );
};

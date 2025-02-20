import { Link } from "react-router-dom";

type Props = {
  link: string;
};

export const ShowButton = (props: Props) => {
  const { link } = props;

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className="p-2 flex items-center text-white bg-mamenz-pink gap-2 hover:opacity-90">
        <svg
          className="w-6 h-6 text-white"
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
            d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
          />
        </svg>
        <span className="tracking-widest font-semi-bold max-lg:text-sm">
          作品を見る
        </span>
      </button>
    </Link>
  );
};

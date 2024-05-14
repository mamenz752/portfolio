import { Headings } from "@/components/common/components/Headings";
import { Link } from "react-router-dom";

const CareerWorks = () => {
  return (
    <div>
      <div className="py-4">
        <Headings en="WORKS" ja="作品・実績" size="S" color="pink" />
      </div>
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
          <li>
            <div className="border-2 border-mamenz-blue">
              <img src="/Rhythmate.png" />
            </div>
            <div className="my-4 flex justify-between items-center">
              <h1 className="text-4xl text-mamenz-blue font-m-plus font-bold">
                Rhythmate
              </h1>
              <Link
                to={"https://rhythmate.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 flex text-white bg-mamenz-pink gap-2">
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
                  <span className="tracking-widest font-semi-bold">
                    作品を見る
                  </span>
                </button>
              </Link>
            </div>
            <p className="font-zen-kaku text-mamenz-blue">
              新しい習慣をゲーム感覚で楽しく身に付けられるアプリです。
              毎日続けるとプレイヤーレベルがアップしたり、
              特別なバッチを受け取ることができます。
              また、習慣がどれだけ続いたか統計情報を表示させ、
              AIによるレビューを受け取ることもできます。
            </p>
            <ul className="mt-4 flex justify-end gap-4">
              <li className="px-4 py-2 bg-mamenz-blue text-white font-m-plus tracking-widest">
                TypeScript
              </li>
              <li className="px-4 py-2 bg-mamenz-blue text-white font-m-plus tracking-widest">
                React
              </li>
            </ul>
          </li>
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
    </div>
  );
};

export default CareerWorks;

/* eslint-disable react/no-unescaped-entities */
export const HomePresenter = () => {
  return (
    <div className="h-screen flex items-center bg-mamenz-blue">
      <div className="w-2/3 mx-auto">
        <div className="flex justify-center items-start flex-col gap-2 font-lexend font-extrabold tracking-widest text-6xl text-white">
          <p>Let's</p>
          <p>Make</p>
          <p>Everyone</p>
          <p>Smile</p>
          <p>
            By <span className="text-mamenz-yellow">Internet</span>
          </p>
        </div>
        <div className="mt-8 font-zen-kaku font-bold text-2xl text-white tracking-wider">
          <p>サヤのポートフォリオサイトへようこそ！</p>
        </div>
        <div className="mt-8 flex justify-end text-mamenz-yellow font-lexend font-extrabold text-right tracking-widest text-6xl">
          <p>\(^_^)/</p>
        </div>
      </div>
    </div>
  );
};

import HomeEmoji from "./HomeEmoji";
import HomeWelcomeEn from "./HomeWelcomeEn";
import HomeWelcomeJp from "./HomeWelcomeJp";

/* eslint-disable react/no-unescaped-entities */
export const HomePresenter = () => {
  return (
    <div className="h-screen flex items-center bg-mamenz-blue">
      <div className="w-2/3 mx-auto">
        <HomeWelcomeEn />
        <HomeWelcomeJp />
        <HomeEmoji />
      </div>
    </div>
  );
};

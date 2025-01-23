import HomeEmoji from "./components/HomeEmoji";
import HomeWelcomeEn from "./components/HomeWelcomeEn";
import HomeWelcomeJp from "./components/HomeWelcomeJp";

/* eslint-disable react/no-unescaped-entities */
export const HomePresenter = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mamenz-blue">
      <HomeWelcomeEn />
      <HomeWelcomeJp />
      <HomeEmoji />
    </div>
  );
};

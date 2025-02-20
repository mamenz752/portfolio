import { HomeWelcomeEn } from "@/features/home/components/HomeWelcomeEn";
import { HomeWelcomeJp } from "@/features/home/components/HomeWelcomeJp";
import { HomeEmoji } from "@/features/home/components/HomeEmoji";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mamenz-blue">
      <HomeWelcomeEn />
      <HomeWelcomeJp />
      <HomeEmoji />
    </div>
  );
};

export default Home;

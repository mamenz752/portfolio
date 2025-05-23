import { AboutSnsLink } from "@/features/about/components/AboutSnsLink";
import { AboutMediaLink } from "@/features/about/components/AboutMediaLink";

export const AboutMe = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center my-8 max-md:my-2">
        <img src="profile.png" alt="mamenz752のイメージ画像" />
      </div>
      <div className="my-4">
        <h1 className="mb-1 text-4xl max-md:text-[2rem] font-zen-kaku font-black tracking-widest text-mamenz-blue">
          サヤ
        </h1>
        <p className="text-2xl max-md:text-[1.2rem] font-m-plus font-medium py-2 tracking-widest text-mamenz-blue">
          WEB DEVELOPER / STUDENT
        </p>
      </div>
      <AboutSnsLink />
      <AboutMediaLink />
      <div className="my-8 text-sm font-noto-sans tracking-widest leading-6 text-mamenz-blue">
        <div>
          <p>CS専攻の大学4年生です。</p>
          <p>Web開発に興味があり、日々勉強しています。</p>
        </div>
        <div className="mt-4">
          <p>得意分野は、企画・UIデザインを含むフロントエンド開発です。</p>
          <p>最近は、バックエンドやインフラについても学んでいます。</p>
          <p>
            今は自分の向いている分野を探りつつ、フルスタックに個人開発しています。
          </p>
        </div>
      </div>
    </div>
  );
};

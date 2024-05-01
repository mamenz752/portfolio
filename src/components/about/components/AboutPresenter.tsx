import { Headings } from "@/components/common/components/Headings";
import { AboutLink } from "./AboutLink";
import { AboutOtherLink } from "./AboutOtherLink";

export const AboutPresenter = () => {
  return (
    <div className="w-1/3 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" color="" />
      <div className="mx-auto my-4">
        <img src="profile.png" alt="mamenz752のイメージ画像" />
      </div>
      <div className="my-4">
        <h1 className="mb-1 text-4xl font-zen-kaku font-black tracking-widest text-mamenz-blue">
          サヤ
        </h1>
        <p className="text-2xl font-m-plus font-medium py-2 tracking-widest text-mamenz-blue">
          WEB DEVELOPER / STUDENT
        </p>
      </div>
      <AboutLink />
      <div className="my-8 font-zen-kaku tracking-widest leading-6 text-mamenz-blue">
        <p>DS/ML専攻の大学3年生です。</p>
        <p>Web開発に興味があり、日々勉強しています。</p>
        <p>主に、フロントエンドの企画・UIデザインから実装が得意です。</p>
        <p>最近はバックエンドにも興味があります。</p>
        <p>
          このポートフォリオサイトもまだまだ進化中ですので、アップデートを楽しみにしていてください！
        </p>
      </div>
      <Headings en="OTHER LINKS" ja="その他の関連リンク" size="S" color="" />
      <AboutOtherLink />
    </div>
  );
};

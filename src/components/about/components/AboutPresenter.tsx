import { Headings } from "@/components/common/components/Headings";
import { AboutLink } from "./AboutLink";
import { AboutOtherLink } from "./AboutOtherLink";

export const AboutPresenter = () => {
  return (
    <div className="w-1/2 mx-auto py-3 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" />
      <div className="mx-auto my-6">
        <img src="profile.png" alt="mamenz752のイメージ画像" />
      </div>
      <div className="my-10">
        <h1 className="text-4xl font-zen-kaku font-bold tracking-widest text-mamenz-blue">
          サヤ
        </h1>
        <p className="text-2xl font-m-plus font-medium py-2 tracking-widest text-mamenz-blue">
          WEB DEVELOPER / STUDENT
        </p>
        <AboutLink />
      </div>
      <div className="my-4 font-zenkaku tracking-widest text-mamenz-blue">
        <p>広島県出身の大学3年生。</p>
        <p>Web開発が楽しくて仕方がない。</p>
        <p>将来的にはプロダクトを作りたいと考えている。</p>
      </div>
      <Headings en="OTHER LINKS" ja="その他の関連リンク" size="S" />
      <AboutOtherLink />
    </div>
  );
};

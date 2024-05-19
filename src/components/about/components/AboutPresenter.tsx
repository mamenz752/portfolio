import { Headings } from "@/components/common/components/Headings";
import { AboutLink } from "./AboutLink";
import { AboutSkillsBeingLearned } from "./AboutSkillsBeingLearned";

export const AboutPresenter = () => {
  return (
    <div className="w-1/2 mx-auto my-10 flex justify-center items-start flex-col">
      <Headings en="ABOUT ME" ja="私について" size="N" color="" />
      <div className="mx-auto my-8">
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
      <div className="my-8 text-sm font-noto-sans tracking-widest leading-6 text-mamenz-blue">
        <div>
          <p>DS/ML専攻の大学3年生です。</p>
          <p>Web開発に興味があり、日々勉強しています。</p>
        </div>
        <div className="mt-4">
          <p>得意分野は、企画・UIデザインを含むフロントエンドの実装です。</p>
          <p>
            今は自分の向いている分野を探りつつ、フルスタックに開発できるように勉強を進めています。
          </p>
          <p>
            プロダクトを制作する際は、ユーザーのニーズに合ったプロダクトが提供できているか、定期的に振り返ることを心がけています。
          </p>
        </div>
        <div className="mt-4">
          <p>
            このポートフォリオサイトも、私が進化し続ける限り常にアップデートされます！
          </p>
          <p>楽しみにしていてください！</p>
        </div>
      </div>
      <Headings
        en="SKILLS BEING LEARNED"
        ja="学んでいる技術"
        size="S"
        color=""
      />
      <AboutSkillsBeingLearned />
      {/*
      <Headings en="OTHER LINKS" ja="その他の関連リンク" size="S" color="" />
      <AboutOtherLink />
      */}
    </div>
  );
};

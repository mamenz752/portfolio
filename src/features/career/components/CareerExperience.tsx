import { Headings } from "@/components/common/components/Headings";

const CareerExperience = () => {
  return (
    <div>
      <div className="py-6">
        <Headings
          en="EXPERIENCE"
          ja="コンペ参加経験など"
          size="S"
          color="pink"
        />
        <ul className="flex flex-col gap-8 text-mamenz-blue font-bold tracking-widest font-zen-kaku">
          <li className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">2024/02</h2>
            <h1 className="text-xl">
              <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
                技育CAMPハッカソン2023 vol.15 参加
              </span>
            </h1>
            <ul className="ml-8 flex flex-col gap-2 font-normal list-disc font-noto-sans">
              <li>
                習慣をゲーム感覚で身につけるアプリ「Rhythmate」を制作しました
              </li>
              <li>主に企画・UIデザイン・フロントエンドを担当しました</li>
              <li>
                このハッカソンにおいて<b>努力賞</b>を受賞しました！
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">2024/05</h2>
            <h1 className="text-xl">
              <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
                技育博2024 vol.2 参加
              </span>
            </h1>
            <ul className="ml-8 flex flex-col gap-2 font-normal list-disc font-noto-sans">
              <li>「Rhythmate」を約3ヶ月間継続開発しました</li>
              <li>
                企業賞として<b>GMOインターネットグループ賞</b>を受賞しました！
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerExperience;

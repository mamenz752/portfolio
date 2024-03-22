import { AboutOtherLinkItem } from "./AboutOtherLinkItem";

export const AboutOtherLink = () => {
  return (
    <ul className="w-full flex gap-6">
      <AboutOtherLinkItem href="/" type="Blog" />
      <AboutOtherLinkItem href="https://qiita.com/mamenz752" type="Qiita" />
      <AboutOtherLinkItem
        href="https://atcoder.jp/users/mamenz752"
        type="AtCoder"
      />
    </ul>
  );
};

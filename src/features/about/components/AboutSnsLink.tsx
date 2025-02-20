import { AboutSnsLinkItem } from "./AboutSnsLinkItem";
import { snsLinks } from "../constants/link";

export const AboutSnsLink = () => {
  return (
    <ul className="w-full flex justify-end gap-4">
      {snsLinks.map((item, key) => {
        return <AboutSnsLinkItem key={key} href={item.url} type={item.image} />;
      })}
    </ul>
  );
};

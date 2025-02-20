import { AboutMediaLinkItem } from "./AboutMediaLinkItem";
import { mediaLinks } from "../constants/link";

export const AboutMediaLink = () => {
  return (
    <ul className="my-6 w-full flex gap-4 max-md:flex-col">
      {mediaLinks.map((item, key) => {
        return (
          <AboutMediaLinkItem key={key} href={item.url} type={item.title} />
        );
      })}
    </ul>
  );
};

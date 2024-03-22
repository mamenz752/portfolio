import { AboutLinkItem } from "./AboutLinkItem";

export const AboutLink = () => {
  return (
    <ul className="w-full flex justify-end gap-4">
      <AboutLinkItem href="https://github.com/mamenz752" type="fa-github" />
      <AboutLinkItem
        href="https://instagram.com/mamenz752"
        type="fa-instagram"
      />
      <AboutLinkItem href="https://x.com/mamenz752" type="fa-x-twitter" />
    </ul>
  );
};

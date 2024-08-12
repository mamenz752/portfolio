import { AboutLinkItem } from "./AboutLinkItem";

type Link = {
  url: string;
  image: string;
};

export const AboutLink = () => {
  const SNSLinks: Link[] = [
    {
      url: "https://github.com/mamenz752",
      image: "fa-github",
    },
    {
      url: "https://instagram.com/mamenz752",
      image: "fa-instagram",
    },
    {
      url: "https://x.com/mamenz752",
      image: "fa-x-twitter",
    },
  ];

  return (
    <ul className="w-full flex justify-end gap-4">
      {SNSLinks.map((item, key) => {
        return <AboutLinkItem key={key} href={item.url} type={item.image} />;
      })}
    </ul>
  );
};

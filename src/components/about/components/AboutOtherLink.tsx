import { AboutOtherLinkItem } from "./AboutOtherLinkItem";

type Link = {
  url: string;
  title: string;
};

export const AboutOtherLink = () => {
  const SNSLink: Link[] = [
    {
      url: "/",
      title: "Blog",
    },
    {
      url: "https://qiita.com/mamenz752",
      title: "Qiita",
    },
    {
      url: "https://zenn.dev/mamenz752",
      title: "Zenn",
    },
  ];

  return (
    <ul className="my-8 w-full flex gap-6">
      {SNSLink.map((item, key) => {
        return (
          <AboutOtherLinkItem key={key} href={item.url} type={item.title} />
        );
      })}
    </ul>
  );
};

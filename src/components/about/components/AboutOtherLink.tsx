import { AboutOtherLinkItem } from "./AboutOtherLinkItem";

type Link = {
  url: string;
  title: string;
};

export const AboutOtherLink = () => {
  const SNSLink: Link[] = [
    {
      url: "https://sy-mame-blog.vercel.app/",
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
    {
      url: "https://sizu.me/mamenz752",
      title: "sizu.me",
    },
  ];

  return (
    <ul className="my-6 w-full flex gap-4">
      {SNSLink.map((item, key) => {
        return (
          <AboutOtherLinkItem key={key} href={item.url} type={item.title} />
        );
      })}
    </ul>
  );
};

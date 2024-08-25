import { Headings } from "@/components/common/components/Headings";

export const ContactPresenter = () => {
  return (
    <div className="w-1/2 max-lg:w-2/3 max-md:w-3/4 min-h-screen mx-auto my-10 flex items-start flex-col">
      <Headings en="CONTACT" ja="お問い合わせ" size="N" color="" />
      <p className="font-zen-kaku text-mamenz-blue">
        現在は受け付けておりません
      </p>
      <div className="m-auto flex justify-center items-center text-mamenz-blue font-lexend font-extrabold tracking-widest text-6xl max-sm:font-bold max-sm:tracking-wide max-sm:text-4xl">
        <p>m(_ _)m</p>
      </div>
    </div>
  );
};

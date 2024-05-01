import { Headings } from "@/components/common/components/Headings";

export const CareerLicense = () => {
  return (
    <div className="py-6">
      <Headings en="LICENSE" ja="資格" size="S" color="pink" />
      <ul className="ml-8 flex flex-col gap-8 text-mamenz-blue text-lg font-bold list-[circle] tracking-widest">
        <li>
          <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
            日本商工会議所簿記検定試験2級 合格
          </span>
        </li>
        <li>
          <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
            ITパスポート試験 合格
          </span>
        </li>
      </ul>
    </div>
  );
};

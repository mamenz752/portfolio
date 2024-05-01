import { Headings } from "@/components/common/components/Headings";

export const CareerLicense = () => {
  return (
    <div className="py-6">
      <Headings en="LICENSE" ja="資格" size="S" color="pink" />
      <ul>
        <li className="text-lg font-bold">日本商工会議所 簿記検定試験 2級</li>
        <li>ITパスポート試験合格</li>
      </ul>
    </div>
  );
};

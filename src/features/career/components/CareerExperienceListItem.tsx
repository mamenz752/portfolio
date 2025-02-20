import { Experience } from "../types/experience";

export const CareerExperienceListItem = (props: Experience) => {
  const { date, title, description } = props;

  return (
    <li className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">{date}</h2>
      <h1 className="text-xl">
        <span className="bg-gradient-to-b from-transparent via-50% via-transparent to-mamenz-yellow">
          {title}
        </span>
      </h1>
      <ul className="ml-8 flex flex-col gap-2 font-normal list-disc font-noto-sans">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

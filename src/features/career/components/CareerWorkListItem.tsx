import { Work } from "../types/work";
import { ShowButton } from "@/components/ShowButton";

export const CareerWorkListItem = (props: Work) => {
  const { title, description, image, link, stack } = props;

  return (
    <li>
      <div className="border-2 border-mamenz-blue">
        <img src={image} />
      </div>
      <div className="my-4 flex justify-between items-center max-md:flex-col max-md:justify-center max-md:items-start max-md:gap-2">
        <h1 className="text-4xl max-lg:text-3xl text-mamenz-blue font-m-plus font-bold tracking-wider">
          {title}
        </h1>
        <ShowButton link={link} />
      </div>
      <p className="font-noto-sans tracking-widest text-mamenz-blue">
        {description}
      </p>
      <ul className="mt-4 flex justify-end gap-4">
        {stack.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-mamenz-blue text-white font-m-plus tracking-widest max-lg:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

type Props = {
  type: string;
};

export const ContactIcon: FC<Props> = ({ type }) => {
  const handleIcon = () => {
    switch (type) {
      case "x-twitter":
        return faXTwitter;
      case "github":
        return faGithub;
      case "instagram":
        return faInstagram;
      default:
        return faXTwitter;
    }
  };

  return (
    <FontAwesomeIcon
      icon={handleIcon()}
      className="text-white text-4xl max-md:text-2xl"
    />
  );
};

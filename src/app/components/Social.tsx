import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/danghuynhanh",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Babyze",
  },
];

function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;

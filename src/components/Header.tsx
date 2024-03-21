import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-around bg-mamenz-blue">
      <Link to="/">
        <div className="w-24">
          <img src="./logo.png" alt="mamenz752のlogo" />
        </div>
      </Link>
      <ul className="flex gap-6 text-xl tracking-widest text-white">
        {/* TODO: liをHeaderLinkコンポーネント化 */}
        <li className="hover:text-mamenz-pink">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:text-mamenz-pink">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="hover:text-mamenz-pink">
          <Link to="/career">CAREER</Link>
        </li>
        <li className="hover:text-mamenz-pink">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
};

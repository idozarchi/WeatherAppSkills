import Headline from "./Headline";
import Menu from "./Menu";

const HEADER_FOOTER_HEIGHT = "64px";

const Header: React.FC = () => {
  return (
    <header
      className="w-full bg-blue-300 text-white shadow"
      style={{ minHeight: HEADER_FOOTER_HEIGHT, height: HEADER_FOOTER_HEIGHT }}
    >
      <div className="flex flex-row items-center justify-between w-full px-8 h-full">
        <Headline />
        <Menu />
      </div>
    </header>
  );
};

export default Header;

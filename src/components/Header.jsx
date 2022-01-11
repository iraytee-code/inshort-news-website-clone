import Menu from "./Menu";
import PageLogo from "./PageLogo";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <Menu />
      <PageLogo />
    </div>
  );
};

export default Header;

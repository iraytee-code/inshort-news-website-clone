import Contact from "./Contact";
import CopyRightInfo from "./CopyRightInfo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="container-footer">
        <div className="main-footer-info">
          <CopyRightInfo />
          <div className="divider"></div>
          <Contact />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;

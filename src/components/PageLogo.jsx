import WebsiteLogo from "../assets/images/logo_inshorts.png";

const PageLogo = () => {
  return (
    <div className="logo">
      <div className="logoicon">
        <img src={WebsiteLogo} alt="BigCo Inc. logo" />
      </div>
    </div>
  );
};

export default PageLogo;

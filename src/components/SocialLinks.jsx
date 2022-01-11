import FacebookIcon from "../assets/images/facebook.png";
import TwitterIcon from "../assets/images/twitter.png";
import LinkedinIcon from "../assets/images/linkedin.png";

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <div className="facebook-icon">
        <img src={FacebookIcon} alt="" />
      </div>
      <div className="twitter-icon">
        <img src={TwitterIcon} alt="" />
      </div>
      <div className="linkedin-icon">
        <img src={LinkedinIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialLinks;

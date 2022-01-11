import Appstorelogo from "../assets/images/appstore.png";
import Playstorelogo from "../assets/images/playstore.png";
const DownloadInfo = () => {
  return (
    <div className="download-link">
      <div className="download-text">
        For the best experience use <span className="bold-text">inshorts</span>{" "}
        app on your smartphone
      </div>
      <div className="appstore-img">
        <img src={Appstorelogo} alt="" />
      </div>
      <div className="playstore-img">
        <img src={Playstorelogo} alt="" />
      </div>
    </div>
  );
};

export default DownloadInfo;

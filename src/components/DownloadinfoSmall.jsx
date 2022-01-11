import Appstorelogo from "../assets/images/appstore.png";

const DownloadInfoSmall = () => {
  return (
    <div className="download-link-small">
      <div className="download-text">
        For the best experience use <span className="bold-text">inshorts</span>{" "}
        app on your smartphone
      </div>
      <div className="appstore-img">
        <img src={Appstorelogo} alt="" />
      </div>
    </div>
  );
};

export default DownloadInfoSmall;

import ContactUs from "../assets/images/contact_icon.png";
const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-logo">
        <img src={ContactUs} alt="BigCo Inc. logo" />
      </div>
      <div className="contact-us-text">
        <p>Terms & conditions Privacy Policies</p>
      </div>
    </div>
  );
};

export default Contact;

import ContactButton from "../buttons/ContactButton";

export default function ServicePage({ Logo, data, setOpen }) {
  return (
    <>
      <div className="service-header">
        <h1 className="header">{data.header}</h1>
        <Logo className="logo" />
      </div>
      <div className="service-content-container">
        <p className="text">{data.text}</p>
        <h2 className="title">{data.title}</h2>
        {/* videos */}
        <h3 className="contact-title">{data.contactTitle}</h3>
        <p className="contact-text">{data.contactText}</p>
        <ContactButton setOpen={setOpen} />
      </div>
    </>
  );
}

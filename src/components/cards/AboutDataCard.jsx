export default function AboutDataCard({ alignment, Image, text }) {
  return (
    <div
      className={
        alignment == "reverse"
          ? "about-card-reverse-container"
          : "about-card-container"
      }
    >
      <img src={Image} className="about-card-img" />
      <div className="about-card-text-container">
        <p className="about-card-text">{text}</p>
      </div>
    </div>
  );
}

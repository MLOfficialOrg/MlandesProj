// Import Assets
import Studio from "../../assets/Studio.png";
import Plugins from "../../assets/Plugins.png";
import Recording from "../../assets/Recording.png";

// Import Components
import AboutDataCard from "../cards/AboutDataCard";
import ContactButton from "../buttons/ContactButton";

export default function About({ setOpen }) {
  return (
    <>
      <div className="about-container">
        <div className="about-content-container">
          <p className="about-header">Hey, I'm Michael.</p>
          <div className="about-cards-container">
            <AboutDataCard
              Image={Studio}
              text={`Feel the power of music touching your soul! With over 13 years of experience in producing music and sound engineering, I am here to bring your musical vision to life.`}
            />
            <AboutDataCard
              alignment="reverse"
              Image={Plugins}
              text={`I create unique melodies using virtual tools before recording with live instruments for that authentic sound you crave.`}
            />
            <AboutDataCard
              Image={Recording}
              text={`My top-notch production and mixing skills "in the box" guarantee to take your music to the next level. Don't miss out on giving your project the extraordinary touch it`}
            />
          </div>
          <p className="about-text">
            Join me on this exciting journey and experience the enchanting
            fusion of technology and artistry that makes our music truly stand
            out.
          </p>
          <ContactButton setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}

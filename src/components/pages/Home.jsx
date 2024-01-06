// Import Assets
import { ReactComponent as Service } from "../../assets/Logos/Services.svg";
import { ReactComponent as MyMusic } from "../../assets/Logos/MyMusic.svg";
import { ReactComponent as Tours } from "../../assets/Logos/Tours.svg";
import Picture from "../../assets/michael-home-pic.png";

// Import Components
import HomeDataCard from "../cards/HomeDataCard";
import ContactButton from "../buttons/ContactButton";

export default function Home({ setOpen }) {
  return (
    <>
      <div className="home-container">
        <div className="home-cards-container">
          <HomeDataCard
            Logo={Service}
            header="Services"
            func={() => {
              console.log(1);
            }}
            text={`Looking for top-notch music production, mixing, and mastering? You've come to the right place! Visit my "Services" page by tap here and elevate your sound game to the next level. Don't wait, transform your music today!`}
          />
          <HomeDataCard
            Logo={MyMusic}
            header="Music"
            func={() => {
              console.log(2);
            }}
            text={`Ready to dive into a world of incredible tunes? I'm beyond excited to introduce you to my music! Expand your playlist with new beats and melodies to suit every mood. Head over to my “Music” page by tap here to discover more.`}
          />
          <HomeDataCard
            Logo={Tours}
            header="Tours"
            func={() => {
              console.log(3);
            }}
            text={`Rockstars, gear up for the show of a lifetime! Get the lowdown on my upcoming gigs, backstage exclusives, and tickets by visiting the "Tours" page. Don't miss a beat - tap here to join the party. See you on the road, folks!`}
          />
        </div>
        <div className="home-summary-container">
          <div className="home-content-container">
            <img src={Picture} className="home-img" />
            <p className="home-text">
              Get ready for a musical treat! My new single is coming your way
              soon, and I can't wait to share it with you. From composing on
              MIDI to crafting the perfect lyrics, recording, mixing, and
              mastering - every step of this amazing creative journey has been
              an absolute blast. I'm sure you'll love it as much as I do!
            </p>
            <p className="home-text">
              In the meantime, why not get in the mood by listening to my last
              hit single on Spotify? Trust me, it's pure ear candy that'll have
              you grooving all day long. Don't miss out on the fun; head over to
              Spotify and experience it for yourself.
            </p>
            <p className="home-header">Last Release</p>
            <iframe
              className="spotify-embed"
              src="https://open.spotify.com/embed/track/0NhFR88js2Tgx15yzUSmts?utm_source=generator&theme=0%22"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <p className="home-text">
              So, are you excited about my new single yet? soon you could save
              the date because it's only a matter of time before you can enjoy
              another chart-topping hit from me! In the words of one of my
              favorite artists: "Music can change the world because it can
              change people." So let's spread some good vibes together, shall
              we?
            </p>
          </div>
        </div>
        <div className="home-contact-container">
          <p className="contact-header">Contact Michael Landes</p>
          <ContactButton setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}

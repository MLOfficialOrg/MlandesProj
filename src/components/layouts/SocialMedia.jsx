// Import Assets
import Spotify from "../../assets/Icons/Spotify.png";
import Instagram from "../../assets/Icons/Instagram.png";
import Facebook from "../../assets/Icons/Facebook.png";
import Youtube from "../../assets/Icons/Youtube.png";
import Tiktok from "../../assets/Icons/Tiktok.png";
import Twitter from "../../assets/Icons/Twitter.png";

export default function SocialMedia() {
  const socialList = [
    {
      icon: Spotify,
      link: "https://open.spotify.com/artist/3d3CIOVR5RiJVRBdywiRb2?si=LRub1ZwGQx2D2F9Ijj21-g",
    },
    { icon: Instagram, link: "https://www.instagram.com/mlandesofficial/" },
    { icon: Facebook, link: "https://www.facebook.com/MichaelLandesOfficial/" },
    { icon: Youtube, link: "https://www.youtube.com/c/MichaelLandesOfficial" },
    { icon: Tiktok, link: "https://www.tiktok.com/@michaellandesofficial" },
    { icon: Twitter, link: "https://twitter.com/MLandesOfficial" },
  ];

  return (
    <>
      <div className="social-media-container">
        {socialList.map((item, idx) => {
          return (
            <a
              key={idx}
              className="social-icon"
              href={item.link}
              target="_blank"
            >
              <img src={item.icon} />
            </a>
          );
        })}
      </div>
    </>
  );
}

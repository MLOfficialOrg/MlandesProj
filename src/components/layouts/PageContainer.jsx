// Import Modules
import { Routes, Route } from "react-router-dom";

// Import Assets
import { ReactComponent as MusicProduction } from "../../Assets/Logos/Music-Production.svg";
import { ReactComponent as Mixing } from "../../Assets/Logos/Mixing.svg";
import { ReactComponent as Mastering } from "../../Assets/Logos/Mastering.svg";

// Import Components
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import ServicePage from "../pages/ServicePage";

const servicePagesData = {
  music: {
    header: "Music production",
    text: "Music production combines audio & MIDI techniques. It involves recording, editing, mixing, & mastering. Effects like EQ, compression, reverb, & delay enhance audio. MIDI enables precise control, virtual instruments, & creative experimentation. Together, they unleash your musical creativity.",
    title: "Get your headphones on and listen now!",
    videos: "",
    contactTitle: "Ready to Produce Hits?",
    contactText: "Click on the Contact Button and Let's Amp It Up! ",
  },
  mixing: {
    header: "Mixing",
    text: "Mixing is where the magic happens! It's the art of blending tracks to create a balanced and vibrant sound. I adjust levels, add effects like EQ and compression, and make everything shine. The result? A polished mix that brings out the best in your music and captivates listeners. Let's make your tracks come alive with our friendly mixing expertise!",
    title: "Turn up the volume and listen now!",
    videos: "",
    contactTitle: "Ready to Sound Pro?",
    contactText: "Click on the Contact Button for Top-notch Mixing!",
  },
  mastering: {
    header: "Mastering",
    text: "Mastering is the final step before distribution. It enhances audio quality, optimizes levels, and ensures consistent sound across tracks. Mastering involves EQ, compression, and other effects to achieve a polished and professional result. It brings out the best in the mix and prepares the music for various playback systems. like Radio, Music Streaming Platforms and etc.",
    title: "Step into the rhythm and listen now!",
    videos: "",
    contactTitle: "Ready to Sound Radio-Ready?",
    contactText: "Click on the Contact Button for Mastering Magic!",
  },
};

export default function PageContainer({ page, setOpen }) {
  return (
    <div className="page-container">
      <Routes>
        <Route index element={<Home setOpen={setOpen} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About setOpen={setOpen} />} />
        <Route
          path="/services/music"
          element={
            <ServicePage data={servicePagesData.music} Logo={MusicProduction} />
          }
        />
        <Route
          path="/services/mixing"
          element={<ServicePage data={servicePagesData.mixing} Logo={Mixing} />}
        />
        <Route
          path="/services/mastering"
          element={
            <ServicePage data={servicePagesData.mastering} Logo={Mastering} />
          }
        />
      </Routes>
    </div>
  );
}

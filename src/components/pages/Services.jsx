// Import Modules
import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Import Assets
import { ReactComponent as MusicProduction } from "../../Assets/Logos/Music-Production.svg";
import { ReactComponent as Mixing } from "../../Assets/Logos/Mixing.svg";
import { ReactComponent as Mastering } from "../../Assets/Logos/Mastering.svg";

// Import Components
import ProductionsDataCard from "../cards/ProductionsDataCard";

export default function Services() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const mock_up_feedback = {
    text: "I recently had the pleasure of working with this incredible music producer on my latest song, and I am beyond happy with the results! The professionalism was simply outstanding. From the start, he took the time to understand my vision and worked tirelessly to bring it to life. I will definitely be back for future projects, and I highly recommend this service to anyone in need of top-notch music production.",
    author: "- Emma Davis",
    date: "September 20, 2020",
  };

  return (
    <>
      <div className="services-container">
        <ProductionsDataCard
          classType="music-production-container"
          title="Music Production"
          Logo={MusicProduction}
          text="Elevate your music to new heights with our professional MIDI and audio production services. Let me bring your unique vision to life!"
          alignmentClass="content-container"
          link="music"
        />
        <ProductionsDataCard
          classType="mixing-container"
          title="Mixing"
          Logo={Mixing}
          text="Want HUGE mixes that sound full and well-balanced? Send in your raw tracks to turn them into incredible, polished recordings."
          alignmentClass="reverse-content-container"
          link="mixing"
        />
        <ProductionsDataCard
          classType="mastering-container"
          title="Mastering"
          Logo={Mastering}
          text="Professionally master your mixes to ensure that they have a great presence and sonic depth that translates well into any type of listening system or environment."
          alignmentClass="content-container"
          link="mastering"
        />
        <div className="feedback-container">
          <p>"{mock_up_feedback.text}"</p>
          <div className="feedback-data-container">
            <p>{mock_up_feedback.author}</p>
            <p>{mock_up_feedback.date}</p>
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{
                "& .MuiMobileStepper-dot": {
                  backgroundColor: "#000000",
                  opacity: 1,
                },
                "& .MuiMobileStepper-dotActive": {
                  backgroundColor: "#D6AE74",
                },
                bgcolor: "#fffef1",
              }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 5}
                >
                  <KeyboardArrowRight sx={{ color: "#000000" }} />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowLeft sx={{ color: "#000000" }} />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

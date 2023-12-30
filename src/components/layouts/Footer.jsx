// Import Components
import SocialMedia from "./SocialMedia";
import FooterLink from "../buttons/FooterLink";

// Import Assets
import { ReactComponent as Logo } from "../../Assets/Logos/logo-white-no-bg.svg";

export default function Footer({ setPage }) {
  return (
    <>
      <div className="footer-container">
        <button
          className="hidden-footer-button"
          onClick={() => {
            setPage("Home");
          }}
        >
          <Logo />
        </button>
        <div className="footer-content-container">
          <SocialMedia />
          <div className="footer-link-row">
            <FooterLink data={["Support", "Contact Me", "Privacy & Terms"]} />
            <FooterLink data={["Cookies", "Safe Surf", "Cookies Choices"]} />
            <FooterLink
              data={["FAQ", "My Account", "Subscribe To Newsletter"]}
            />
          </div>
          <p className="copy-right">
            © 2022 - 2023 Michael Landes. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
}

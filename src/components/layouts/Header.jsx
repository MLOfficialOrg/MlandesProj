// Import Components
import SocialMedia from "./SocialMedia";
import NavBar from "./NavBar";

// Import Assets
import Cover from "../../Assets/cover.png";

export default function Header({ page, setPage, loggedIn, setLogin }) {
  return (
    <div className="header-container">
      <button
        className="hidden-header-button"
        onClick={() => {
          setPage("Home");
        }}
      >
        <img className="cover-image" src={Cover} />
      </button>
      <SocialMedia />
      <NavBar
        page={page}
        setPage={setPage}
        loggedIn={loggedIn}
        setLogin={setLogin}
      />
    </div>
  );
}

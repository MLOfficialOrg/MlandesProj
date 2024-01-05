// Import Assets
import { Link } from "react-router-dom";
import LoggedInAvatar from "../../assets/Icons/logged-avatar.png";
import NotLoggedInAvatar from "../../assets/Icons/not-logged-avatar.png";

export default function NavBar({ page, setPage, loggedIn, setLogin }) {
  const tabList = [
    ["Home", ""],
    ["About", "about"],
    ["Services", "services"],
    ["My Music", "mymusic"],
    ["Videos", "videos"],
    ["Tours", "tours"],
    ["Store", "store"],
  ];

  return (
    <div className="nav-bar-container">
      <div className="links-container">
        {tabList.map((item, idx) => {
          return (
            <Link key={idx} to={item[1]}>
              <button
                className={page === item[0] ? "tab-item-selected" : "tab-item"}
                onClick={() => {
                  setPage(item[0]);
                }}
              >
                {item[0]}
              </button>
            </Link>
          );
        })}
      </div>
      {loggedIn ? (
        <button className="hidden-nav-button">Logout</button>
      ) : (
        <button
          className="hidden-nav-button"
          onClick={() => {
            setLogin(true);
          }}
        >
          My Account
        </button>
      )}
    </div>
  );
}

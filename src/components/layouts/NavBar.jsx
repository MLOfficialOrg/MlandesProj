// Import Assets
import { Link } from "react-router-dom";
import LoggedInAvatar from "../../Assets/Icons/logged-avatar.png";
import NotLoggedInAvatar from "../../Assets/Icons/not-logged-avatar.png";

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
    <>
      <div className="nav-bar-container">
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
        {loggedIn ? (
          <button className="hidden-nav-button">
            <img src={LoggedInAvatar} />
          </button>
        ) : (
          <button
            className="hidden-nav-button"
            onClick={() => {
              setLogin(true);
            }}
          >
            <img src={NotLoggedInAvatar} />
          </button>
        )}
      </div>
    </>
  );
}

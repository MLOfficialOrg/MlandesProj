// Import Modules
import { useEffect, useState } from "react";

// Import Components
import PageContainer from "./PageContainer";
import Footer from "./Footer";
import Header from "./Header";
import ContactUS from "../forms/ContactUs";
import Login from "../pages/Login";

export default function Layout() {
  const [page, setPage] = useState("Home");
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSetPage = (page) => {
    localStorage.setItem("page", page);
    setPage(page);
  };

  useEffect(() => {
    const page = localStorage.getItem("page");
    setPage(page);
  }, []);

  return (
    <>
      {login && <Login setLoggedIn={setLoggedIn} />}
      {!login && (
        <div className="main-window">
          <Header
            page={page}
            setPage={handleSetPage}
            loggedIn={loggedIn}
            setLogin={setLogin}
          />
          <PageContainer page={page} open={open} setOpen={setOpen} />
          <Footer setPage={handleSetPage} />
          <ContactUS open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}

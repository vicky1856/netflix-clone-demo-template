import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [show, setShow] = useState(false);
  useEffect(() => {
    async function handleScroll() {
      if (window.scrollY > 10) {
        setShow(true);
      }
      else
        setShow(false);

    }
  }, []);

  return (
    <div className="nav  nav__black">


      window.addEventListener('scroll', handleScroll)


      <img src="netflix-logo.png" className="nav__logo" />
      <img src="Netflix-avatar.png" className="nav__avatar" />

    </div>
  );
};

export default Navbar;

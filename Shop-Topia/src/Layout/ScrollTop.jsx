import AOS from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease-out-back",
    });
    AOS.refresh();
  }, [pathname]);

  return children || null;
};

export default ScrollTop;

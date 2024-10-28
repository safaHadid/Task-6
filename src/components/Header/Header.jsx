import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="my-[50px] flex justify-center">
      {isDarkTheme ? (
        <img
          src="/assets/THEBLOGDARK.png"
          className="w-100 py-8"
          alt=""
        />
      ) : (
        <img
          src="/assets/THEBLOG.png"
          className="w-100 py-8"
          alt=""
        />
      )}
    </div>
  );
};

export default Header;

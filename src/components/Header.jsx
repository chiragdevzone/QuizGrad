import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-16 justify-between items-center mx-12 my-7 border-b-2 border-app-small-slate pb-7">
      <div>
        <h1 className=" text-3xl relative ">
          <span className="text-app-yellow">Quiz</span>
          <span className="text-app-black">Grad</span>
        </h1>
        <img
          className="w-8 absolute top-5 left-9 -rotate-[30deg]"
          src="../../public/cap.png"
          alt="cap-img"
        />
      </div>
      <div>
        <ul className="flex items-center">
          <Link to="/howitworks">
            {" "}
            <li className="mx-3  text-app-small-slate">How it works?</li>
          </Link>
          <Link to="/features">
            {" "}
            <li className="mx-3  text-app-small-slate">Features</li>
          </Link>
          <Link to="aboutus">
            {" "}
            <li className="mx-3  text-app-small-slate">About us</li>
          </Link>
          <Link to="/login">
            <li className="mx-4 ">
              <button className=" border-2 border-app-yellow px-5 py-2 ">
                Login
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

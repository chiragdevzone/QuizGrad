import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const showTopic = useSelector((store) => store.topic.showTopic);
  const showScore = useSelector((store) => store.topic.showScore);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setIsMenuOpen(false);
    setTimeout(() => {
      dispatch(logoutUser());
    }, 1000);
    localStorage.removeItem("user");
  };
  return (
    <div
      className={`flex h-16 justify-between items-center my-20y mx-12 my-7 border-b-2 border-app-small-slate pb-7 ${
        showTopic || showScore ? "blur-sm pointer-events-none" : ""
      }
      `}
    >
      <Link to="/">
        <div className="relative p-3">
          <h1 className=" text-3xl  ">
            <span className="text-app-yellow">Quiz</span>
            <span className="text-app-black">Grad</span>
          </h1>
          <img
            className="w-8 absolute top-1 left-0 -rotate-[30deg]"
            src="/cap.png"
            alt="cap-img"
          />
        </div>
      </Link>

      <div>
        <ul
          className={`flex md:flex-row md:top-0 flex-col w-1/2 md:relative absolute md:border-none md:visible border-l-2 h-1/2 bg-app-white z-10 border-app-small-slate top-[100px] right-0 md:items-center ${
            isMenuOpen ? "" : "invisible"
          } `}
        >
          <Link to="/howitworks">
            {" "}
            <li
              onClick={() => setIsMenuOpen(false)}
              className="md:mx-3 my-2 mx-6 md:text-sm whitespace-nowrap text-app-small-slate text-lg"
            >
              How it works?
            </li>
          </Link>
          <Link to="/features">
            {" "}
            <li
              onClick={() => setIsMenuOpen(false)}
              className="md:mx-3 my-2 mx-6 md:text-sm whitespace-nowrap text-app-small-slate text-lg"
            >
              Features
            </li>
          </Link>
          <Link to="aboutus">
            {" "}
            <li
              onClick={() => setIsMenuOpen(false)}
              className="md:mx-3 my-2 mx-6 md:text-sm whitespace-nowrap text-app-small-slate text-lg"
            >
              About us
            </li>
          </Link>
          {user ? (
            <li className="md:mx-3 my-2 mx-6 md:text-sm text-lg ">
              <button
                onClick={handleLogout}
                className=" border-2 border-app-yellow px-5 py-2 "
              >
                Logout
              </button>
            </li>
          ) : (
            <Link to="/login">
              <li className="md:mx-3 my-2 mx-6 md:text-sm text-lg ">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className=" border-2 border-app-yellow px-5 py-2 "
                >
                  Login
                </button>
              </li>
            </Link>
          )}
        </ul>
        {isMenuOpen ? (
          <img
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden w-6 cursor-pointer "
            src="/close.png"
            alt="close_icon"
          />
        ) : (
          <img
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-6 cursor-pointer "
            src="/hamburger.png"
            alt="hamburger_icon"
          />
        )}
      </div>
    </div>
  );
};

export default Header;

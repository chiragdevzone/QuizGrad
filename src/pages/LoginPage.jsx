import React, { useRef, useState } from "react";
import { validate } from "../utils/formValidation";

import { useDispatch } from "react-redux";
import { loginUser } from "../utils/authSlice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../utils/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = () => {
    const validResult = validate(
      emailRef.current.value,
      PasswordRef.current.value
    );
    setErrorMessage(validResult);

    if (!validResult) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        PasswordRef.current.value
      )
        .then((userCredential) => {
          localStorage.setItem("user", JSON.stringify(userCredential));
          dispatch(loginUser(userCredential));
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
    return 0;
  };

  const handleSignup = () => {
    const validResult = validate(
      emailRef.current.value,
      PasswordRef.current.value
    );
    setErrorMessage(validResult);

    if (!validResult) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        PasswordRef.current.value
      )
        .then((userCredential) => {
          localStorage.setItem("user", JSON.stringify(userCredential));
          dispatch(loginUser(userCredential));
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
    return 0;
  };

  return (
    <div className="flex h-[100vh] p-8">
      <div className="w-1/2 h-full  flex flex-col justify-start items-center">
        <div className="relative   px-4 py-6 ">
          <Link to="/">
            <h1 className=" text-7xl text-center  ">
              <span className="text-app-yellow">Quiz</span>
              <span className="text-app-black">Grad</span>
            </h1>
          </Link>

          <img
            className="w-14 absolute top-2 left-0 -rotate-[28deg]"
            src="/cap.png"
            alt="cap-img"
          />
        </div>
        <div className="flex flex-col items-center text-app-paragraph-slate">
          <p>Welcome back!</p>
          <p>Please login/Signup to your account.</p>
        </div>
        <form className="my-8" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={emailRef}
            className="w-full h-10 border  border-app-paragraph-slate  outline-none p-2 focus:border-l-4 focus:border-l-app-yellow "
            type="text "
            placeholder="Email Address"
          />
          <input
            ref={PasswordRef}
            className="w-full h-10 border border-t-0 border-app-paragraph-slate  outline-none p-2 focus:border-l-4 focus:border-l-app-yellow "
            type="password"
            placeholder="Password"
          />
          <p className="text-app-error-red py-1">{errorMessage}</p>
          <div className="flex justify-between mt-4 text-app-paragraph-slate">
            <div>
              <input id="checkbox" type="checkbox" />{" "}
              <label htmlFor="checkbox">Remember Me</label>
            </div>

            <p>Forgot Password?</p>
          </div>

          <div className="mt-8">
            <button
              onClick={handleLogin}
              className="mr-2 p-2 px-4 bg-app-yellow text-app-white"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="mx-2 p-2 px-4 text-app-yellow border border-app-yellow shadow-md shadow-app-yellow "
            >
              Signup
            </button>
          </div>
        </form>

        <div className="my-6 flex w-[70%] text-sm">
          <p className="text-app-paragraph-slate mr-4">Or login with</p>
          <p className="text-app-yellow mx-2">Facebook</p>
          <p className="text-app-yellow mx-4">Google</p>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src="/cap.png" alt="cap-img" />
      </div>
    </div>
  );
};

export default LoginPage;

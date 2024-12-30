import React, { useRef, useState } from "react";
import { validate } from "../utils/formValidation";

import { useDispatch } from "react-redux";
import { loginUser } from "../utils/authSlice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app, provider } from "../utils/firebaseConfig";
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

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userCredential = GoogleAuthProvider.credentialFromResult(result);
        localStorage.setItem("user", JSON.stringify(userCredential));
        dispatch(loginUser(userCredential));
        navigate("/");
      })
      .then((error) => {
        setErrorMessage(error.code + "-" + error.message);
      });
  };

  return (
    <div className="flex h-[100vh]  md:p-8 p-4">
      <div className=" lg:w-1/2 h-full w-full  flex justify-center items-start">
        <div className=" w-10/12 ">
          <div className=" w-full flex justify-center text-center md:px-4 py-6 ">
            <div className="relative w-60 py-6 px-6">
              <Link to="/">
                <h1 className=" lg:text-7xl text-center sm:text-6xl text-5xl ">
                  <span className="text-app-yellow">Quiz</span>
                  <span className="text-app-black">Grad</span>
                </h1>
              </Link>

              <img
                className="w-14 absolute top-0 left-0 sm:left-1 md:left-1 lg:top-1 -rotate-[28deg]"
                src="/cap.png"
                alt="cap-img"
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center my-8 md:my-0 text-app-paragraph-slate ">
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

            <div className="mt-8 ">
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

          <div className="my-6 flex justify-start w-full text-sm">
            <p className="text-app-paragraph-slate mr-4">Or login with</p>

            <p
              onClick={handleGoogle}
              className="text-app-yellow mx-4 cursor-pointer"
            >
              Google
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full lg:flex justify-center items-center  hidden ">
        <img src="/cap.png" alt="cap-img" />
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="m-12 px-8 flex h-[67vh]">
      <div className=" w-1/2 h-full p-2">
        <h2 className="text-app-black text-6xl leading-[70px]">
          Learn <br />
          new concepts <br />
          for each question
        </h2>
        <p className="my-5 p-1 text-app-paragraph-slate border-l-2 border-app-black">
          We help you prepare for exams and quizes
        </p>
        <div className="flex">
          <button className="mr-2 p-2 bg-app-yellow text-app-white">
            Start solving
          </button>
          <Link to="/howitworks">
            <button className="mx-2 p-2 text-app-yellow border-2 border-app-yellow">
              Know more
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-1/2 h-full p-2 flex justify-center items-center">
        <img src="../../public/hero_img.png" alt="hero image" />
      </div>
    </div>
  );
};

export default LandingPage;

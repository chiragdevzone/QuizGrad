import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full ">
      <div className="relative mx-auto  px-4 pt-3 w-52 text-center hidden md:block">
        <Link to="/">
          <h1 className=" text-4xl   ">
            <span className="text-app-yellow">Quiz</span>
            <span className="text-app-black">Grad</span>
          </h1>
        </Link>

        <img
          className="w-10 absolute top-0 left-1 -rotate-[28deg]"
          src="../../public/cap.png"
          alt="cap-img"
        />
      </div>
      <div>
        <h1 className="text-3xl text-app-yellow  my-4 mx-6">About Us</h1>
        <p className="text-app-paragraph-slate my-4 mx-6">
          Welcome to QuizGrad, an innovative platform designed to provide an
          engaging and educational experience for quiz enthusiasts. Created by
          Chirag Sankhla, a passionate Frontend Developer, this app combines
          cutting-edge technology and a user-friendly interface to deliver a
          seamless quiz experience.
        </p>
        <p className="text-app-paragraph-slate my-4 mx-6">
          At QuizGrad, we prioritize security and convenience, offering users a
          smooth authentication process through Google&apos;s Firebase system.
          Whether you&apos;re using a mobile phone, tablet, laptop, or desktop,
          QuizGrad ensures you can play quizzes from anywhere, at any time.
        </p>
        <p className="text-app-paragraph-slate my-4 mx-6">
          Our platform is powered by Google&apos;s AI system, Gemini, which
          generates new, diverse questions for every session, so you&apos;re
          always challenged with fresh content. With QuizGrad, you can test your
          knowledge across multiple topics and enjoy a responsive, intuitive
          interface that enhances your learning journey.
        </p>
        <p className="text-app-paragraph-slate my-4 mx-6">
          Join us today and start solving quizzes to sharpen your skills while
          having fun!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

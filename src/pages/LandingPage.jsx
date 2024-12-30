import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { show, hide } from "../utils/topicSlice";
import Tag from "../components/Tag";

const LandingPage = () => {
  const dispatch = useDispatch();
  const showTopic = useSelector((store) => store.topic.showTopic);
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  const tags = useSelector((store) => store.tag.tags);

  const handleStart = () => {
    if (user) {
      dispatch(show());
    } else {
      navigate("/login");
    }
  };

  const handleQuiz = () => {
    dispatch(hide());
    navigate("/dashboard");
  };
  return (
    <div className={`relative   `}>
      <div
        className={`md:m-12 m-6   sm:px-8 px-4 flex h-[67vh]  ${
          showTopic ? "blur-sm pointer-events-none " : ""
        }`}
      >
        <div className=" w-full md:w-1/2 h-full p-2">
          <h2 className="text-app-black md:text-5xl lg:text-6xl whitespace-nowrap  text-4xl leading-[70px]">
            Learn <br />
            new concepts <br />
            for each question
          </h2>
          <p className="my-5 p-1 text-app-paragraph-slate border-l-2 border-app-black">
            We help you prepare for exams and quizes
          </p>
          <div className="flex">
            <button
              onClick={handleStart}
              className="mr-2 p-2 bg-app-yellow text-app-white"
            >
              Start solving
            </button>

            <Link to="/howitworks">
              <button className="mx-2 p-2 text-app-yellow border-2 border-app-yellow">
                Know more
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-1/2 h-full p-2 invisible md:visible flex justify-center items-center">
          <img src="../../public/hero_img.png" alt="hero image" />
        </div>
      </div>
      {showTopic && (
        <div className="w-8/12 h-96 p-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app-white shadow-2xl shadow-app-black ">
          <div className=" w-full flex flex-col items-center justify-between">
            <h1 className="text-4xl mt-4 text-app-black">
              Choose your favorite topic
            </h1>
            <p className="mt-4 text-app-paragraph-slate text-lg">
              Slelet more than 5 topics to start quiz
            </p>
            <Tag />
            {tags.length > 4 && (
              <button
                onClick={handleQuiz}
                className="mr-2 p-2 bg-app-yellow text-app-white self-end"
              >
                Start Quiz
              </button>
            )}
          </div>
          <span
            onClick={() => dispatch(hide())}
            className="text-app-paragraph-slate text-3xl absolute top-0 right-3 leading-10 cursor-pointer"
          >
            x
          </span>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

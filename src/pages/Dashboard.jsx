import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showS, hideS } from "../utils/topicSlice";
import { markAttempt, resetAttemptAll } from "../utils/attemptSlice";
import { resetMcqsAll } from "../utils/mcqsSlice";
import { resetTagAll } from "../utils/tagSlice";

const Dashboard = () => {
  const showScore = useSelector((state) => state.topic.showScore);
  const dispatch = useDispatch();
  const mcqsArr = useSelector((store) => store.mcqs.mcqsArr);
  const isAttempt = useSelector((store) => store.attempt.isAttempt);
  const [questionNum, setQuestioNum] = useState(0);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const yourScoreRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const quesObj = mcqsArr[questionNum];

    setQuestion(quesObj.questionText);
    setOptions(quesObj.options);
    setCorrectOption(quesObj.correctOption);
  }, [questionNum]);

  const handleOption = (option) => {
    setSelectedOption(option);
    if (option == correctOption) {
      yourScoreRef.current += 1;
    }

    dispatch(markAttempt(questionNum));
  };

  const handleNext = () => {
    if (questionNum < 9 && isAttempt[questionNum]) {
      setQuestioNum(questionNum + 1);
      setSelectedOption(null);
    } else {
      dispatch(showS());
    }
  };

  const handlePrevious = () => {
    if (questionNum > 0) {
      setQuestioNum(questionNum - 1);
    }
  };

  const handleSkip = () => {
    if (questionNum < 9) {
      setQuestioNum(questionNum + 1);
    } else {
      dispatch(showS());
    }
  };

  return (
    <div className="w-full h-[75vh] relative ">
      <div
        className={`flex flex-col justify-between h-[75vh] w-full ${
          showScore && "blur-sm pointer-events-none"
        }`}
      >
        {isAttempt[questionNum] ? (
          <p className="w-80 mx-auto text-center bg-app-green text-app-white p-4">
            Question attempted
          </p>
        ) : (
          <p className="w-56 mx-auto text-center bg-app-yellow text-app-white p-4">
            Question pending
          </p>
        )}
        <div className="my-4 bg-app-yellow text-app-white text-3xl py-12 px-8 text-justify ">
          {questionNum + 1 + ".) "}
          {question}
        </div>
        <div className="flex w-full justify-around py-4 ">
          {options.map((option, i) => (
            <button
              onClick={() => handleOption(option)}
              disabled={isAttempt[questionNum]}
              key={i}
              className={`py-8 px-4 text-xl relative w-52 ${
                selectedOption === option
                  ? selectedOption === correctOption
                    ? "bg-app-green text-app-white"
                    : "bg-app-error-red text-app-white"
                  : option == correctOption && selectedOption
                  ? "bg-app-green text-app-white"
                  : "bg-app-small-slate text-app-black"
              } `}
            >
              <p className="font-medium">{option}</p>
              <span className="absolute top-0 left-0">{i + 1}.</span>
            </button>
          ))}
        </div>
        <div className="flex w-full justify-between pl-40 pr-16">
          <button onClick={handlePrevious} className="p-2 bg-app-small-slate">
            ◀ Previous
          </button>

          <div>
            <button
              onClick={handleNext}
              disabled={!isAttempt[questionNum]}
              className="py-3 px-6 bg-app-yellow text-app-white"
            >
              Next ▶
            </button>
            <button onClick={handleSkip} className="py-3 px-6 text-app-yellow ">
              Skip ▶▶
            </button>
          </div>
        </div>
      </div>
      {showScore && (
        <div className=" w-8/12 h-96  bg-app-white shadow-2xl shadow-app-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <div className="flex justify-center items-center relative z-20">
            <div className="relative">
              <img src="../../public/dayflow.png" alt="score_abstract_img" />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-app-white flex flex-col justify-center items-center">
                <p className="text-3xl font-medium mb-4">Your score</p>
                <p className="text-9xl">{yourScoreRef.current}</p>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(hideS());
                dispatch(resetAttemptAll());
                dispatch(resetMcqsAll());
                dispatch(resetTagAll());
                navigate("/");
              }}
              className="absolute py-3 px-6 bg-app-yellow text-app-white bottom-0 right-4"
            >
              Complete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { show, hide } from "../utils/topicSlice";
import Tag from "../components/Tag";
import { model } from "../utils/geminiConfig";
import { addMcqs } from "../utils/mcqsSlice";

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

  const handleQuiz = async () => {
    const prompt = `I have an array of tags that I will provide to you. Please generate 10 multiple-choice questions related to those tags. The response must be a JSON object with a single key named \`questions\`. The \`questions\` key should hold an array of objects. Each object should have the following keys: \`questionNumber\`, \`questionText\`, \`options\` (an array of 4 strings), and \`correctOption\` (a string representing the correct answer).

Here is an example of what I expect:

{
  "questions": [
    {
      "questionNumber": 1,
      "questionText": "What is the capital of France?",
      "options": ["London", "Paris", "Berlin", "Madrid"],
      "correctOption": "Paris"
    },
    {
      "questionNumber": 2,
      "questionText": "Who painted the Mona Lisa?",
      "options": ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
      "correctOption": "Leonardo da Vinci"
    }
  ]
}


Please ensure that the \`correctOption\` for each question is one of the \`options\` provided, and that the output is valid JSON no extra tokens. The tags array will be given after this message, so here is the tag array: ${JSON.stringify(
      tags
    )}`;

    const result = await model.generateContent(prompt);

    const actualResult = result.response.text();
    const regex = /{[\s\S]*}/;
    const matched = actualResult.match(regex);
    if (matched) {
      const resultArray = JSON.parse(matched[0]);

      dispatch(addMcqs(resultArray.questions));
    } else {
      console.log("json not found ");
    }

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
          <img src="/hero.png" alt="hero image" />
        </div>
      </div>
      {showTopic && (
        <div className="w-8/12 md:h-96 p-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app-white shadow-2xl shadow-app-black ">
          <div className=" w-full flex flex-col items-center justify-between">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl mt-4 text-app-black">
              Choose your favorite topic
            </h1>
            <p className="mt-4 text-app-paragraph-slate text-[10px] sm:text-sm md:text-lg lg:text-xl">
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

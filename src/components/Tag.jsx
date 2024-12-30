import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../utils/tagSlice";

const quizTopics = [
  "History",
  "Geography",
  "Science",
  "Mathematics",
  "Sports",
  "Movies",
  "Music",
  "Literature",
  "Art",
  "Technology",
  "General Knowledge",
  "Space Exploration",
  "Mythology",
  "Animals",
  "World Capitals",
];

const Tag = () => {
  const dispatch = useDispatch();
  const tags = useSelector((store) => store.tag.tags);
  const handleClick = (tag) => {
    if (tags.includes(tag)) {
      dispatch(removeTag(tag));
    } else {
      dispatch(addTag(tag));
    }
  };
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {quizTopics.map((tag) => (
        <div
          onClick={() => handleClick(tag)}
          className=" mx-2 my-2  cursor-pointer"
          key={tag}
        >
          <span
            className={`px-2 py-1 bg-app-small-slate text-app-black font-semibold  ${
              tags.includes(tag) && "bg-app-yellow text-app-black"
            }`}
          >
            {tag}
          </span>
          {tags.includes(tag) && (
            <span className="bg-app-black text-app-white px-2 py-1">x</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tag;

import { createSlice } from "@reduxjs/toolkit";

const mcqsSlice = createSlice({
  name: "mcqs",
  initialState: {
    mcqsArr: [
      {
        questionNumber: 1,
        questionText: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Jaipur", "Gujarat"],
        correctOption: "Delhi",
      },
      {
        questionNumber: 2,
        questionText: "Who is the Prime Minister of India?",
        options: [
          "Narendra Modi",
          "Rahul Gandhi",
          "Dr. Manmohan Singh",
          "Sonia Gandhi",
        ],
        correctOption: "Narendra Modi",
      },
      {
        questionNumber: 3,
        questionText: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOption: "Jupiter",
      },
      {
        questionNumber: 4,
        questionText: "What is the national animal of India?",
        options: ["Tiger", "Peacock", "Lion", "Elephant"],
        correctOption: "Tiger",
      },
      {
        questionNumber: 5,
        questionText: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Ganga", "Yangtze"],
        correctOption: "Nile",
      },
      {
        questionNumber: 6,
        questionText: "Which element has the chemical symbol O?",
        options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correctOption: "Oxygen",
      },
      {
        questionNumber: 7,
        questionText: "Who invented the telephone?",
        options: [
          "Alexander Graham Bell",
          "Nikola Tesla",
          "Thomas Edison",
          "James Watt",
        ],
        correctOption: "Alexander Graham Bell",
      },
      {
        questionNumber: 8,
        questionText: "Which continent is known as the 'Dark Continent'?",
        options: ["Africa", "Asia", "South America", "Australia"],
        correctOption: "Africa",
      },
      {
        questionNumber: 9,
        questionText: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctOption: "Blue Whale",
      },
      {
        questionNumber: 10,
        questionText: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
        correctOption: "Vatican City",
      },
    ],
  },
  reducers: {
    addMcqs: (state, action) => {
      state.mcqsArr = action.payload;
    },
  },
});

export const { addMcqs } = mcqsSlice.actions;
export default mcqsSlice.reducer;

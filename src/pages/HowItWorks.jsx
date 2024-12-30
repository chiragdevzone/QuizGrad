import React from "react";

const HowItWorks = () => {
  return (
    <div className="mx-2">
      <h1 className="text-app-yellow font-medium text-2xl md:text-4xl text-center mx-2 my-4">
        How it works?
      </h1>
      <div className="md:mx-10 mx-4 text-lg text-justify">
        <div className="flex  items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            To play the quiz, you need to create an account. If you already have
            one, please log in first.
          </p>
        </div>
        <div className="flex   items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            On the home page, click the &quot;Start Solving&quot; button to
            begin.
          </p>
        </div>
        <div className="flex  items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            A pop-up will appear where you need to select at least 5 tags. Based
            on your selection, you will receive 10 multiple-choice questions.
          </p>
        </div>
        <div className="flex   items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            You will then be redirected to the dashboard where the quiz will
            begin.
          </p>
        </div>
        <div className="flex  items-start my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            On the dashboard, you will see a question with four options. Select
            the correct option and click the &quot;Next&quot; button to proceed.
          </p>
        </div>
        <div className="flex   items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            If you want to skip a question, click the &quot;Skip&quot; button.
            You can revisit skipped questions by clicking the
            &quot;Previous&quot; button.
          </p>
        </div>
        <div className="flex   items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            Please note that once an option is selected, it cannot be changed.
          </p>
        </div>
        <div className="flex   items-start  my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            After answering all 10 questions, your score will be displayed on
            the screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

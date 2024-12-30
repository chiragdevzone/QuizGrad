import React from "react";

const Features = () => {
  return (
    <div className="mx-2">
      <h1 className="text-app-yellow font-medium text-2xl md:text-4xl text-center mx-2 my-4">
        Features
      </h1>
      <div className="md:mx-10 mx-4 text-lg text-justify">
        <div className="flex items-start my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            QuizGrad employs Google&apos;s Firebase authentication system,
            ensuring secure and reliable user access.
          </p>
        </div>
        <div className="flex items-start my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            The platform is fully responsive, providing a seamless experience
            across mobile, tablet, laptop, and desktop devices.
          </p>
        </div>
        <div className="flex items-start my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            With AI-generated questions powered by Google&apos;s Gemini system,
            you will always encounter fresh and diverse content.
          </p>
        </div>
        <div className="flex items-start my-6">
          <div className="min-w-4 min-h-4 bg-app-yellow rounded-full mx-2 mt-2"></div>
          <p>
            The platform offers an intuitive and polished user experience
            designed to maximize engagement and ease of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

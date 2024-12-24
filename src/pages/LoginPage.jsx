import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-[100vh] p-8">
      <div className="w-1/2 h-full  flex flex-col justify-start items-center">
        <div className="relative   px-4 py-6 ">
          <h1 className=" text-7xl relative text-center  ">
            <span className="text-app-yellow">Quiz</span>
            <span className="text-app-black">Grad</span>
          </h1>
          <img
            className="w-14 absolute top-2 left-0 -rotate-[28deg]"
            src="../../public/cap.png"
            alt="cap-img"
          />
        </div>
        <div className="flex flex-col items-center text-app-paragraph-slate">
          <p>Welcome back!</p>
          <p>Please login/Signup to your account.</p>
        </div>
        <form action="">
          <input type="text " />
          <input type="password " />
        </form>
      </div>
      <div className="w-1/2 h-full bg-app-black">part2</div>
    </div>
  );
};

export default LoginPage;

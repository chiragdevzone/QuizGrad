import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/authSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    dispatch(loginUser(JSON.parse(storedUser)));
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

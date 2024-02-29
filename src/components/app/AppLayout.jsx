import React from "react";
import "./applayout.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="logo_wrapper">
        <h1>All halal</h1>
      </div>
      <main className="main_contetn_container">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;

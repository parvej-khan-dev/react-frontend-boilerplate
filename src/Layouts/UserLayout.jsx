import React, { Suspense } from "react";
import { Header, Footer } from "../Components";
import { Outlet } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default UserLayout;

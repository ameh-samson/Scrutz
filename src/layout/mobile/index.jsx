import React from "react";
import Header from "./Header";

const MobileLayout = ({ children }) => {
  return (
    <div className="lg:flex h-screen overflow-hidden">
      <div className="w-full">
        <Header />

        <div className="h-screen overflow-y-scroll pb-32 pt-10">
          <div className="container">
            <>{children}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;

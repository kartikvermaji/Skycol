import React from "react";
import Navbar from "../Components/Navbar";

const NotFound = () => {
  return (
    <div className="bg-slate-300">
      <Navbar />
      
        <div className=" flex flex-col items-center  bg-slate-300 h-[100vh]">
            <h1 className="mt-32 text-[10vh] font-extrabold font-mono">404 Not Found !</h1>
            
          <h1 className="mt-12 text-2xl font-semibold">Oops Page Doesn't Exist</h1>
        </div>
      
    </div>
  );
};

export default NotFound;

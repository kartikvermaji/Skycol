import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="bg-slate-300">
      <Navbar></Navbar>
      <div className=" h-full p-10 container mx-auto items-center pt-[20vh]  text-center w-[80vw]">
        <h1 className="text-2xl font-extrabold my-10">Contact Us</h1>
        <p className="text-lg">
          For inquiries, demonstrations, or collaboration opportunities related
          to our MERN stack-powered social media app,</p>
          <p className="text-lg"> please reach out through
          the following channels:
        </p>
        <h2 className="my-5 text-lg">
        <span className="font-semibold text-xl">Email:{" "}</span>
          <a href="mailto:kartikvermaji03@gmail.com" className="text-blue-900 hover:text-blue-500">
          kartikvermaji03@gmail.com
          </a>
        </h2>
        <h2 className="my-5 text-lg">
          <span className="font-semibold text-xl">LinkedIn:{" "}</span>
          
          <a href="https://www.linkedin.com/in/kartik-verma-037238259"className="text-blue-900 hover:text-blue-500">
          https://www.linkedin.com/in/kartik-verma-037238259
          </a>
        </h2>
        <h2 className="my-5 text-lg">
        <span className="font-semibold text-xl">Github:{" "}</span>
          <a href="https://github.com/kartikvermaji" className="text-blue-900 hover:text-blue-500">
          https://github.com/kartikvermaji
          </a>{" "}
        </h2>
        <p className="text-lg">I am look forward to connecting with you!</p>
        <p className="text-xl mt-5 font-semibold">Kartik Verma 💖💖</p>
        <p className="text-xl font-semibold">DTU</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

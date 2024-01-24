import React from "react";
import { useNavigate } from "react-router-dom";
import { faUserDoctor, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UProfile = ({ owner }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100 rounded-lg font-sans shadow-2xl shadow-slate-700  mx-2 md:mx-8  p-4 my-24 h-80 w-[90vw]  md:fixed md:top-10 md:left-8 md:w-[32vw]  lg:top-14 lg:left-16 lg:w-[20vw] ">
      <div
        className="flex border-b-2 border-slate-400"
        onClick={() => {
          navigate(`/profile/${owner._id}`);
        }}
      >
        <img
          src={
            owner.picturePath
              ? owner.picturePath
              : "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043234-animal-avatar-bear-russian_113283.png"
          }
          alt="User-pic"
          className="m-2 md:h-16 md:w-16 h-10 w-10 "
        />
        <div>
          <p className="m-2 mb-1 text-slate-900 text-lg font-semibold">
            {owner.firstName} {owner.lastName}
          </p>
          <p className="m-2 mt-1 text-slate-600 font-semilight">
            {owner.email}
          </p>
        </div>
      </div>

      <div className="p-2 text-slate-700 border-b-2 border-slate-400">
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faUserDoctor} className="text-xl" />
          <p>{owner.occupation}</p>
        </div>

        <div className="flex space-x-2 my-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
          <p>{owner.location}</p>
        </div>
      </div>

      <div className="flex flex-col p-3 text-slate-700 space-y-2 text-md border-b-2 border-slate-400">
        
          <a href="https://github.com/kartikvermaji">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />  Github
          </a>
      
          <a href="https://www.linkedin.com/in/kartik-verma-037238259">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />  LinkedIn
          </a>
        
      </div>

      <p className="text-slate-700 text-center my-2">{owner.friends.length} Friends </p>
    </div>
  );
};

export default UProfile;

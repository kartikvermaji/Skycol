import React from "react";
import { useSelector } from "react-redux";
import state from "../state/state";
import axios from "axios";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSnackbar} from 'notistack'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewPost = () => {
  const {enqueueSnackbar}=useSnackbar();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("");
  const [postOption, setPostOption] = useState(false);

  const handlePostOption = async () => {
    setPostOption(!postOption);
  };
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/posts",
        {
          userId: user._id,
          description: description,
          picturePath: image,
        },
        {
          headers: { authorization: token },
        }
      );
      enqueueSnackbar("Post Uploaded Successfuly!",{variant:"success"})
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Please fill all feilds",{variant:"error"})
    }
  };

  return (
    <div className= "container items-center mx-auto bg-slate-100 rounded-3xl md:rounded-xl w-[90vw] md:w-[49vw] lg:w-[40vw] mt-[-3rem] lg:mt-32 md:mt-20 p-2 my-4 px-4 flex shadow-2xl hover:shadow-slate-800">
      <img
        src={
          user.picturePath
            ? user.picturePath
            : "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043234-animal-avatar-bear-russian_113283.png"
        }
        alt="User-pic"
        className="h-10 w-10 md:h-16 md:w-16"
      />
      {postOption ? (
        <div>
          <form action="" onSubmit={handlePost} className="flex pb-4 ">
            <div className="flex flex-col">
            <input
              type="text"
              placeholder="Image Link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="lg:w-[29vw] md:w-[30vw]  w-[55vw] p-2 md:p-3 bg-slate-300 text-sm md:text-md text-center md:ml-2 md:mt-2 mr-1 ml-1 md:mr-2 md:rounded-3xl mb-2 md:mb-2 rounded-full text-white hover:bg-slate-900"
            />
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="md:w-[30vw] lg:w-[29vw] w-[55vw] p-3 md:p-6 bg-slate-300 text-sm md:text-md text-center md:ml-2 md:mt-2 mr-1 ml-1 md:mr-2 md:rounded-3xl mb-1 md:mb-2 rounded-3xl text-white hover:bg-slate-900"
            />
            <button type="submit" className="text-white bg-slate-900 p-3 hover:shadow-slate-600 hover:shadow-xl  rounded-3xl hover:bg-slate-400 hover:text-slate-900 xl:hidden"><FontAwesomeIcon icon={faPlus} /> POST</button>
            </div>
           
       
            <button type="submit"><FontAwesomeIcon icon={faPlus}  className="text-white hover:shadow-slate-600 hover:shadow-xl bg-slate-900 p-3 px-[13px] rounded-3xl hover:bg-slate-400 hover:text-slate-900 hidden xl:block"  /></button>
          </form>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Wanna Post Something?"
            onClick={handlePostOption}
            className="md:w-[600px] w-[55vw] p-2 md:p-4 bg-slate-300 text-sm md:text-md text-center md:ml-2 md:mt-2 mr-1 ml-1 md:mr-2 md:rounded-3xl md:mb-2 rounded-full text-white hover:bg-slate-900"
          />
          <button><FontAwesomeIcon icon={faPlus}  onClick={handlePostOption} className="text-white hover:shadow-slate-600 hover:shadow-xl bg-slate-900 p-3 px-[13px] rounded-3xl hover:bg-slate-400 hover:text-slate-900" /></button>
        </>
      )}
    </div>
  );
};

export default NewPost;

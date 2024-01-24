import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  { setLogout } from "../state/state";
import {
  faGhost
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSnackbar} from 'notistack'

const Navbar = () => {
  const {enqueueSnackbar}=useSnackbar();
  const auth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlelogout = async () => {
    dispatch(setLogout({}));
    enqueueSnackbar("User Logged out Successfully",{variant:"success"})
  };

  return (
    <div className="p-2 md:p-4 z-10 bg-slate-100 text-center flex justify-between font-sans font-semibold fixed w-full">
      <div>
        
        <h1 className="font-extrabold md:text-2xl text-xl"><FontAwesomeIcon icon={faGhost} /> SKYCOL</h1>
      </div>
      <div className="space-x-10 hidden md:block ">
        <Link to="/home" className="p-4 border-b-0 hover:border-b-2 hover:border-slate-500 hover:drop-shadow-md">Home</Link>
        <Link to="/about" className="p-4 border-b-0 hover:border-b-2 hover:border-slate-500 hover:drop-shadow-md">About Us</Link>
        <Link to="/contact" className="p-4 border-b-0 hover:border-b-2 hover:border-slate-500 hover:drop-shadow-md">Contact Us</Link>
      </div>
      <div>
        {auth ? (
          <div className="flex">
            <img
              src={
                user.userPicturePath
                  ? user.userPicturePath
                  : "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043234-animal-avatar-bear-russian_113283.png"
              }
              alt="User-pic"
              className="md:h-14 md:w-14 h-10 w-10 rounded-3xl object-contain"
            />{" "}
            <div>
              <p className="flex justify-center">
                {user.firstName} {user.lastName}
              </p>
              <button onClick={handlelogout} className="p-0 border-b-0 hover:border-b-2 hover:border-slate-500 hover:drop-shadow-md" >Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/" className="p-2 text-md md:text-xl border-b-0 hover:border-b-2 hover:border-slate-500 hover:drop-shadow-md">Login/Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

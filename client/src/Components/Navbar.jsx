import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import state, { setLogout } from "../state/state";

const Navbar = () => {
  const auth = Boolean(useSelector((state) => state.STATE.token));
  const user = useSelector((state) => state.STATE.user);
  const dispatch = useDispatch();
  const handlelogout = async () => {
    dispatch(setLogout({}));
  };

  return (
    <div>
      <div>
        <h1>SKYCOL</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div>
        {auth ? (
          <>
            <p>
              {user.firstName } {user.lastName}
            </p>
            <button onClick={handlelogout}>Logout</button>
          </>
        ) : (
          <Link to="/">Login/Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

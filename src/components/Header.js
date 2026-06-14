import React from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
        // Dispatch the addUser action with the user data
      } else {
        // User is signed out
        // Dispatch the removeUser action
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () =>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute px-8 py-2 z-10 w-full bg-gradient-to-b from-black flex items-center justify-between">
      <img src={logo} alt="Logo" className="w-28" />
      {user && (
        <div className="flex items-center p-2">
          <button className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 cursor-pointer rounded"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

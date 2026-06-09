import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import bg from "../assets/bg.png";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //console.log(email.current.value, password.current.value, name.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? undefined : name.current?.value,
    );
    setErrorMessage(message);
    if (message) return;

    //sign in or sign up logic here
    if (!isSignInForm) {
      //sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      //sign in logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img src={bg} alt="Background" className="w-full h-screen object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-12 bg-black/70 w-3/12 flex flex-col">
          <h1 className="text-3xl font-bold mb-6 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 rounded bg-gray-700 text-white outline-none"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 rounded bg-gray-700 text-white outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 rounded bg-gray-700 text-white outline-none"
          />
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button
            className="p-3 my-2 mt-8 bg-red-600 text-white rounded font-bold hover:bg-red-700"
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-100 py-4">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white cursor-pointer font-semibold"
              onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

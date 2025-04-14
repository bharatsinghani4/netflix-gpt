import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import {
  NETFLIX_BACKGROUND_IMAGE_URL,
  USER_PHOTO_URL,
} from "../utils/constants";

const Login = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeName = (e) => (nameRef.current = e.target.value);
  const handleChangeEmail = (e) => (emailRef.current = e.target.value);
  const handleChangePassword = (e) => (passwordRef.current = e.target.value);

  const toggleSignInForm = () => setIsSignUpForm(!isSignUpForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current;
    const enteredEmail = emailRef.current;
    const enteredPassword = passwordRef.current;
    const errorMessage = checkValidData(enteredEmail, enteredPassword);

    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (isSignUpForm) {
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: enteredName,
            photoURL: USER_PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;

          setErrorMessage(errorCode + " - " + errorMsg);
        });
    } else {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;

          setErrorMessage(errorCode + " - " + errorMsg);
        });
    }
  };

  return (
    <div className="relative min-h-[100vh] before:bg-black before:z-30 before:opacity-50 before:absolute before:h-full before:w-full before:left-0 before:top-0">
      <Header />
      <div className="absolute h-[100vh] w-full left-0 top-0">
        <img
          className="h-full max-w-full w-full object-cover scale"
          src={NETFLIX_BACKGROUND_IMAGE_URL}
          alt="Netflix Background image"
        />
      </div>
      <form
        className="absolute text-white flex flex-col left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-80 bg-black/70 px-6 py-10 gap-5 rounded-lg z-30"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold">Sign {isSignUpForm ? "Up" : "In"}</h1>
        {isSignUpForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-2 bg-gray-600 text-sm rounded"
            onChange={handleChangeName}
            required
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-2 bg-gray-600 text-sm rounded"
          onChange={handleChangeEmail}
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-600 text-sm rounded"
          onChange={handleChangePassword}
          required
        />
        {errorMessage && (
          <p className="text-red-400 text-sm font-bold">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="p-2 bg-red-600 cursor-pointer rounded"
        >
          Sign {isSignUpForm ? "Up" : "In"}
        </button>
        <div className="text-sm flex gap-2">
          <p>{isSignUpForm ? "Already registered" : "New to Netflix"}?</p>
          <button
            type="button"
            className="underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            Sign {isSignUpForm ? "In" : "Up Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

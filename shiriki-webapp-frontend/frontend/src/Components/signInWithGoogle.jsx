import React, { useState } from "react";
import googleAuth from "./../assets/images/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase/firebase";

const SignInWithGoogle = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const googleLogin = async () => {
    if (isPopupOpen) return; // Prevents multiple popups
    setIsPopupOpen(true);

    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);

      const user = result.user;
      if (user) {
        window.location.href = "/services";
      }
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        console.log("Another popup request was made and canceled.");
      } else if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup was closed by the user before sign-in.");
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setIsPopupOpen(false); // Reset popup state after attempt
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-center items-center p-2">
      <p className="text-xs text-gray-400 font-thin">--Or continue with--</p>

      <button onClick={googleLogin} disabled={isPopupOpen}>
        <img src={googleAuth} className="w-44" alt="auth with google" />
      </button>
    </div>
  );
};

export default SignInWithGoogle;

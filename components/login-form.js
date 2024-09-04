"use client";

import FunkyButton from "./funky-button";

export default function LoginForm() {
  //Read the last used button from local storage
  const lastUsed = localStorage.getItem("lastUsed") || "";

  //Set the last used button to the last used button
  const setLastUsed = (buttonTag) => {
    localStorage.setItem("lastUsed", buttonTag);
    alert("Reload the page to see the last used text");
  };
  return (
    <div className=" mt-16 w-full flex flex-col space-y-2">
      <div>
        <FunkyButton
          customClass={
            "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
          }
          onClick={(e) => {
            e.preventDefault();
            setLastUsed("google");
          }}
        >
          <div className="flex justify-between items-center">
            <div>Sign in with Google</div>
            <img
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              className=" size-6 m-0"
            />
          </div>
        </FunkyButton>
        {lastUsed === "google" && (
          <div className="text-sm text-gray-500 ml-3 my-1">Last used ☝️</div>
        )}
      </div>
      <div>
        <FunkyButton
          customClass={
            "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
          }
          onClick={(e) => {
            e.preventDefault();
            setLastUsed("facebook");
          }}
        >
          <div className="flex justify-between items-center">
            <div>Continue with Facebook</div>
            <img
              src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
              className=" size-6 m-0"
            />
          </div>
        </FunkyButton>
        {lastUsed === "facebook" && (
          <div className="text-sm text-gray-500 ml-3 my-1">Last used ☝️</div>
        )}
      </div>
      <div>
        <FunkyButton
          customClass={
            "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
          }
          onClick={(e) => {
            e.preventDefault();
            setLastUsed("x");
          }}
        >
          <div className="flex justify-between items-center">
            <div>Sign in with X</div>
            <img
              src="https://www.vectorlogo.zone/logos/x/x-icon.svg"
              className=" size-6 m-0"
            />
          </div>
        </FunkyButton>
        {lastUsed === "x" && (
          <div className="text-sm text-gray-500 ml-3 my-1">Last used ☝️</div>
        )}
      </div>
      <div>
        <FunkyButton
          customClass={
            "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
          }
          onClick={(e) => {
            e.preventDefault();
            setLastUsed("stripe");
          }}
        >
          <div className="flex justify-between items-center">
            <div>Sign in to Stripe</div>
            <img
              src="https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg"
              className=" size-6 m-0"
            />
          </div>
        </FunkyButton>
        {lastUsed === "stripe" && (
          <div className="text-sm text-gray-500 ml-3 my-1">Last used ☝️</div>
        )}
      </div>
    </div>
  );
}

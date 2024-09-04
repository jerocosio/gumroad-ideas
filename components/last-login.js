"use client";

import { useEffect, useState } from "react";
import FunkyButton from "./funky-button";

export default function LastLogin() {
  const [lastUsed, setLastUsed] = useState("");

  useEffect(() => {
    setLastUsed(localStorage.getItem("lastUsed") || "");
  }, []);

  return (
    <section>
      <h2 className="text-2xl">Medium improvements</h2>
      <div>
        <h3>
          Let the users know what log-in method they used when they last logged
          in:
        </h3>
        <p>
          <strong>Current:</strong>
        </p>
        <p>
          <strong>Proposed change:</strong>
        </p>
        <div className=" w-96 flex flex-col space-y-2">
          <div>
            <FunkyButton
              customClass={
                "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
              }
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("lastUsed", "google");
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
              <div className="text-sm text-gray-500 ml-3 my-1">
                Last used ☝️
              </div>
            )}
          </div>
          <div>
            <FunkyButton
              customClass={
                "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
              }
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("lastUsed", "facebook");
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
              <div className="text-sm text-gray-500 ml-3 my-1">
                Last used ☝️
              </div>
            )}
          </div>
          <div>
            <FunkyButton
              customClass={
                "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
              }
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("lastUsed", "x");
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
              <div className="text-sm text-gray-500 ml-3 my-1">
                Last used ☝️
              </div>
            )}
          </div>
          <div>
            <FunkyButton
              customClass={
                "w-full bg-white group-hover:bg-google-plus text-black group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)]"
              }
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("lastUsed", "stripe");
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
              <div className="text-sm text-gray-500 ml-3 my-1">
                Last used ☝️
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

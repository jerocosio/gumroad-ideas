"use client";

import FunkyButton from "@/components/funky-button";

export default function SignUp({}) {
  const lastUsed = localStorage.getItem("lastUsed");

  //Set the last used button to the last used button
  const setLastUsed = (buttonTag) => {
    localStorage.setItem("lastUsed", buttonTag);
    alert("Reload the page to see the last used text");
  };
  return (
    <main className="flex">
      <div className="flex-1 p-12">
        <div className="flex justify-between">
          <a href="#">
            <img class="fill-blue-500 text-pink-500" src="/logo.svg" />
          </a>
          <a href="#" className="underline font-light">
            Log in
          </a>
        </div>
        <div className=" mt-20 w-full flex flex-col space-y-2">
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
              <div className="text-sm text-gray-500 ml-3 my-1">
                Last used ☝️
              </div>
            )}
          </div>
        </div>
        <div class="relative flex py-5 items-center w-full">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="flex-shrink mx-4 text-gray-300">or</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      <div className="flex-1">
        <img src="https://assets.gumroad.com/packs/static/822e112a3b444c69f7ef.png" />
      </div>
    </main>
  );
}

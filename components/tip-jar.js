"use client";

import { useState } from "react";

import FunkyButton from "./funky-button";

export default function TipJar() {
  const [showTip, setShowTip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      <h2 className="text-2xl">Tip jar</h2>
      <p>
        If you like my work, you can support me by buying me a coffee. I will
        use the money to pay for my hosting and domain costs.
      </p>
      <button
        onClick={() => {
          setShowTip(!showTip);
          setShowModal(false);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {showTip ? "Hide" : "Show"} tip jar
      </button>
      {showTip && (
        <div className="fixed right-0 bottom-0 size-20 flex items-center justify-center group">
          {!showModal && (
            <div className="hidden absolute group-hover:block bottom-16 -left-20">
              <p className="bg-gray-500 py-1 px-2 rounded-full text-sm text-gray-800">
                Wanna help me out?
              </p>
            </div>
          )}

          <button
            onClick={() => setShowModal(!showModal)}
            className="border flex items-center justify-center border-white rounded-full group-hover:-translate-x-1 group-hover:-translate-y-1 bg-pink-400 size-16 group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)] transition duration-200"
          >
            {!showModal ? (
              <img src="/gumroad-g.svg" className="size-8" />
            ) : (
              <p className="text-black text-3xl">X</p>
            )}
          </button>
        </div>
      )}
      {showModal && (
        <div className="fixed prose prose-sm right-2 bottom-24 w-60 bg-white shadow-[4px_4px_0_0_rgb(0,0,0)] rounded ">
          <div className="p-2">
            <h3 className="mt-0 text-sm ">Buy me a coffee</h3>
            <p className="text-xs text-center">
              If you like my work, you can support me by buying me a coffee. I
              will use the money to pay for my hosting and domain costs.
            </p>
            <form>
              <label htmlFor="amount">Amount</label>
              <input
                placeholder="$ USD"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                type="number"
                min="1"
                step=".01"
              />
              <div className="pr-2">
                <FunkyButton
                  customClass={"w-full bg-pink-400 text-black"}
                  href={"https://1291163509952.gumroad.com/coffee"}
                >
                  Buy me a coffee
                </FunkyButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

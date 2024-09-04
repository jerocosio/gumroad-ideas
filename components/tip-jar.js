"use client";

import { useState } from "react";

import FunkyButton from "./funky-button";

export default function TipJar() {
  const [showTip, setShowTip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      <h2 id="tip_jar">Tipping Jar</h2>
      <p>
        As a way to expand the current widgets available, I belive that creating
        a simple widget that could be added to the creators websites would be an
        amazing way for them to start receiving tips easily.
      </p>
      <p>
        <strong>Problem:</strong>
      </p>
      <ul>
        <li>
          <p>
            Creators want to be able to receive tips/donations right from their
            website.
          </p>
        </li>
        <li>
          <p>
            Currently the only widgets need to be all overlay or an embed, but
            there's no easy way to add it to all your site.
          </p>
        </li>
      </ul>
      <p>
        <strong>Solution:</strong>
      </p>
      <ul>
        <li>
          Create a simple widget that can be embedded into the creators website.
        </li>
        <li>
          This could be a simple button that opens a modal with a form to input
          the amount, and then redirect the users to a page where we recieve the
          amout as a parameter, and all ready to complete the payment.
        </li>
        <li>
          It could be extended to many web platforms like Wordpress, Shopify,
          React, etc.
        </li>
      </ul>

      <button
        onClick={() => {
          setShowTip(!showTip);
          setShowModal(false);
        }}
        className="group ease-in-out py-5 px-2"
      >
        <div
          className={`bg-white group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)] transition duration-200 font-light text-black rounded-sm px-4 py-3 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-pink-400`}
        >
          {showTip ? "Hide" : "Show"} tipping jar
        </div>
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
                  Offer me a tip
                </FunkyButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

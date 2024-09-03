"use client";

export default function FunkyButton({ children, customClass, onClick }) {
  return (
    <a href="#" className={`group ease-in-out py-5 px-2`} onClick={onClick}>
      <button
        className={`group-hover:shadow-[4px_4px_0_0_rgb(0,0,0)] transition duration-200 font-light text-black rounded-sm px-4 py-3 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-pink-400 ${
          customClass ? customClass : "bg-white"
        }`}
      >
        {children}
      </button>
    </a>
  );
}

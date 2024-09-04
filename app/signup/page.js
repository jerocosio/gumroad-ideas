import FunkyButton from "@/components/funky-button";
import LoginForm from "@/components/login-form";

export default function SignUp({}) {
  return (
    <main className="flex">
      <div className="flex-1 p-12">
        <div className="flex justify-between mb-8 ">
          <a href="#">
            <img className="fill-blue-500 text-pink-500" src="/logo.svg" />
          </a>
          <a
            href="#"
            className="underline font-light text-sm text-gray-300 hover:text-gray-500"
          >
            Already have an account? Log in
          </a>
        </div>
        <LoginForm />
        <div className="relative flex py-5 items-center w-full">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-300">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="">
          <label className="text-gray-500 mb-6">Email</label>
          <input
            type="text"
            placeholder=""
            className="w-full mb-4 bg-black border border-gray-600 rounded-sm focus:outline-pink-400 outline-pink-400 px-4 py-2"
          />
          <label className="text-gray-500 mb-6">Password</label>
          <input
            type="password"
            placeholder=""
            className="w-full bg-black border border-gray-600 rounded-sm focus:outline-pink-400 outline-pink-400 px-4 py-2"
          />
          <FunkyButton customClass="w-full bg-pink-400 text-black mt-8">
            Create account
          </FunkyButton>
        </div>
      </div>
      <div
        className="flex-1 flex justify-center items-center bg-cover
      bg-[url('https://assets.gumroad.com/packs/static/822e112a3b444c69f7ef.png')]
      "
      >
        <div className=" p-12">
          <div className=" bg-white text-black rounded-sm p-6 shadow-[4px_4px_0_0_rgb(0,0,0)]">
            <p className="text-3xl">
              Join over <strong>186,832</strong> creators who have earned over
              <strong> $1,009,801,055</strong> on Gumroad selling digital
              products and memberships.
            </p>
            <p className="text-lg text-gray-800 mt-4 text-center">
              "Thanks to Gumroad, I was able to launch my product in minutes!
              Now I have more than 20 products." -{" "}
              <a
                className="underline hover:text-gray-700"
                href="https://luisfurushio.gumroad.com/?recommended_by=staff_picks&_gl=1*1ygf57g*_ga*MTQzMjE2NzIwMC4xNzI1NDEwNzI4*_ga_6LJN6D94N6*MTcyNTQxNDYzNC4yLjAuMTcyNTQxNDYzNC4wLjAuMA.."
              >
                {" "}
                Luis Furushio, Digital Creator
              </a>
            </p>
            <div className="mt-4 flex items-center">
              <p className="text-gray-500 w-40 text-sm ">
                Join Luis and +180,000 other creators now
              </p>
              <div className="flex -space-x-4 ">
                {
                  //Create an array and map over it
                  Array.from({ length: 10 }).map((_, i) => (
                    <img
                      className="size-12 border-2 border-white rounded-full dark:border-gray-800"
                      src={`https://loremflickr.com/200/200?random=${i}`}
                      alt=""
                    />
                  ))
                }
                <a
                  className="flex items-center justify-center size-12 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +180k
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

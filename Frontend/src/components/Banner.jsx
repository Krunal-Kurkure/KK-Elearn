// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "/Elearn.jpg";
import BotpressWebchat from "./BotpressWebchat";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container pt-24 md:pt-24 mx-auto md:px-20 px-4 flex flex-col md:flex-row md:justify-between md:gap-48 2xl:gap-30 gap-6">
        <div className="w-full order-2 md:order-1  md:w-1/2 mt-14 md:mt-0">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello Welcome to learn something{" "}
              <span className="text-pink-600">new everyday</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              numquam enim quod id, labore dolorem ipsum pariatur, sit
              reprehenderit quas consequatur dignissimos quam, vitae provident
              itaque. Quod dignissimos nesciunt aperiam.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:bg-slate-900 rounded dark:text-white"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-4 mb-10">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 order-1 md:mt-0">
        <img src={Image} className="w-85 h-85" alt="elearnimage"/>
        </div>
        
      </div>

      <div>
        <BotpressWebchat/>
    </div>
    </>
  );

}

export default Banner;

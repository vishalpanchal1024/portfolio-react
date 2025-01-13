import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SocialMediaButtons,
} from "../buttons/Buttons";

export default function Contact() {
  return (
    <div className=" flex flex-col-reverse justify-around items-center  rounded-xl animate-glow  ">
      <div className=" ">
        <SocialMediaButtons layout="md:flex md:flex-row grid grid-cols-3" />
      </div>
      <div className="">
        <p className=" text-xl font-bold text-gray-200">or</p>
      </div>

      <div className="py-5 px-5 ">
        <form className="flex flex-col">
          <div className="flex flex-row justify-around gap-2">
            <div className="mb-2">
              <label className="text-gray-300 font-light mb-2" for="name">
                Name
              </label>
              <input
                className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal text-gray-300 text-sm"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="text-gray-300 font-light mb-2" for="email">
                Email
              </label>
              <input
                className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal text-gray-300  text-sm"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="text-gray-300 font-light mb-2" for="message">
              Message
            </label>
            <textarea
              className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-white-500 focus:ring-2  px-4 block w-full appearance-none leading-normal text-gray-300  text-sm"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <SecondaryButton
            title={"Send Message"}
            onClick={() => ""}
          ></SecondaryButton>
        </form>
      </div>
    </div>
  );
}

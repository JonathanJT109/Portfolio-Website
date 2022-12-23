import React from "react";
import Input from "./components/input";

function ContactPage() {
  return (
    <div className="mt-10 h-5/6">
      <h2 className="text-center text-4xl font-bold mb-14">
        Contact Me by Filling this Form
      </h2>
      <div className="flex justify-center">
        <form className="flex flex-col space-y-8 bg-neutral-900 w-3/6 rounded-2xl px-10 pb-7 pt-10">
          <Input
            inputName="Name*"
            inputType="text"
            inputPlaceholder="Joe Smith"
            nameOfInput="name"
          />
          <Input
            inputName="Email*"
            inputType="email"
            inputPlaceholder="name@gmail.com"
            nameOfInput="email"
          />
          <Input
            inputName="Phone"
            inputType="number"
            inputPlaceholder="xxx-xxx-xxxx"
            nameOfInput="phone"
          />
          <Input
            inputName="Company"
            inputType="text"
            inputPlaceholder="Company"
            nameOfInput="company"
          />
          <div>
            <h4 className="mb-4">Description*</h4>
            <textarea
              className="bg-neutral-50 text-black mb-2 outline-0 focus:placeholder:text-transparent placeholder:ease-in placeholder:duration-300 placeholder:text-neutral-400 rounded-md px-3 py-2 w-full h-40"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="m-auto pb-2">
            <button className="font-bold text-neutral-100 tracking-wide hover:bg-sky-700 hover:text-neutral-200 duration-200 bg-sky-500 py-2 w-40 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

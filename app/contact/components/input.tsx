import React from "react";

interface inputInfo {
  inputName: string;
  inputType: string;
  inputPlaceholder: string;
  nameOfInput: string;
}

function Input({
  inputName,
  inputType,
  inputPlaceholder,
  nameOfInput,
}: inputInfo) {
  return (
    <div>
      <div className="">
        <h4 className="mb-4">{inputName}</h4>
        <input
          className="text-black bg-neutral-50 outline-0 focus:placeholder:text-transparent placeholder:ease-in placeholder:duration-300 placeholder:text-neutral-400 w-full rounded-md pl-2 py-1"
          type={inputType}
          name={nameOfInput}
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  );
}

export default Input;

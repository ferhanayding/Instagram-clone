import React, { useEffect, useState } from "react";

const Input = ({ label, type = "text", ...props }) => {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);
  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);
  return (
    <label className=" relative flex bg-zinc-50 border focus-within:border-gray-300">
      <input
        required={true}
        type={inputType}
        className=" w-full text-xs h-[38px] px-2 rounded-sm bg-zinc-50  valid:pt-[10px] outline-none peer"
        {...props}
      ></input>
      <small className="absolute -translate-y-1/2 top-1/2 left-[9px] text-xs text-gray-400 cursor-text peer-valid:text-[10px] peer-valid:top-2.5 transition-all  ">
        {label}
      </small>
      {type === "password" && props.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className="h-full  cursor-pointer select-none flex items-center text-sm font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
};

export default Input;

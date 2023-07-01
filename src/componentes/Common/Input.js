import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const Input = (props) => {
  return (
    <div className={`input_group ${props.inputGroupClass}`}>
      {props.label && (
        <label htmlFor={props.label}>
          {props.label}{" "}
          {props.isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        style={props.style}
        onChange={props.onChange}
        disabled={props.disabled}
        ref={props.ref}
      />
      {props?.copyToClipboard && (
        <span
          className=""
          style={{ position: "absolute", marginTop: "0px" }}
          // onClick={() => copyToClipboard("left")}
        >
          <MdOutlineContentCopy />
        </span>
      )}
      {!props.error?.includes("required") && (
        <p style={{ color: "red", fontSize: "13px", width: "100%" }}>
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Input;

import React from "react";

const TextArea = ({
  label,
  name,
  id,
  className,
  cols,
  rows,
  onChange,
  placeholder,
  isRequired,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={label}>
          {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;

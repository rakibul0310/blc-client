import React from "react";

const Select = ({
  label,
  name,
  value,
  id,
  onChange,
  className,
  options,
  disabled,
  isRequired,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={label}>
          {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className={className}
        disabled={disabled}
      >
        <option value="--select--">
            --Select--
          </option>
        {options.map((d, i) => (
          <option key={i + 1} value={d}>
            {d}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

function Text(props) {
  const {
    name,
    value,
    prepend,
    append,
    type,
    placeholder,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;
  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;
  if (type === "tel") pattern = "[0-9]*";

  const changeOn = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (!pattern.test(event.target.value)) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };
  return (
    <div className={["input-text mb-3", outerClassName].join("")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={["form-control", inputClassName].join("")}
          value={value}
          placeholder={placeholder}
          onChange={changeOn}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
}


Text.defaultProps = {
  type: "Text",
  pattern: "",
  placeholder: "Please Type here",
  errorResponse: "Please match the requested format",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};

export default Text;

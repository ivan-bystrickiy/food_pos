import React, { useState } from "react";
import "./Select.scss";

/**
 * TODO:
 * 1. Гибкость (чтобы можно было передавать опции селекта)
 * 2. При клике на опцию менялся value
 * 3. Чтобы опции открывались при клике на селект и закрывались при клике на любое свободное пространство
 */

function Select(props) {
  const {
    className = "",
    defaultValue = null,
    onChange: handleChange,
    ...rest
  } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChange = (newValue) => {
    setValue(newValue);
    setOpen(false);
    if (handleChange) handleChange(newValue);
  };

  const acitveOption = props.children.find((option) => {
    return option.props.value === value;
  });

  return (
    <div className={`Select ${className}`} {...rest}>
      <div
        className="Select__value form-control"
        onClick={() => setOpen(!open)}
      >
        <i className="icon-Arrow---Down" />
        <span>{acitveOption.props.label}</span>
      </div>

      {open && (
        <div className="Select__dropdown">
          {props.children.map((Option) =>
            React.cloneElement(Option, {
              active: value,
              onChange: onChange,
            })
          )}
        </div>
      )}
    </div>
  );
}

Select.Option = function (props) {
  const { label, value, active, onChange } = props;

  return (
    <div
      className={`Select__option ${
        value === active ? "Select__option_active" : ""
      }`}
      onClick={() => onChange(value)}
    >
      {label}
    </div>
  );
};

export { Select };

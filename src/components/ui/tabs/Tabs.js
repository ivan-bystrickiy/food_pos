import React, { useEffect, useRef, useState } from "react";
import "./Tabs.scss";

let prevAcitveButton;

function Tabs(props) {
  let { value, onChange, className, ...rest } = props;

  let activeButtonRev = useRef();
  let [lineLeft, setLineLeft] = useState(
    activeButtonRev.current
      ? activeButtonRev.current.getBoundingClientRect().left
      : 0
  );

  const setActive = (idx, button) => {
    onChange(idx);
  };

  useEffect(() => {
    if (!prevAcitveButton) prevAcitveButton = activeButtonRev.current;

    const currentButtonLeft =
      activeButtonRev.current?.getBoundingClientRect().left;
    const prevButtonLeft = prevAcitveButton?.getBoundingClientRect().left;
    const diffLeft = currentButtonLeft - prevButtonLeft;

    setLineLeft((lineLeft + diffLeft) || 0);

    prevAcitveButton = activeButtonRev.current;
  }, [value, props.children]);

  return (
    <div className={`Tabs ${className}`} {...rest}>
      {props.children.map((Tab, idx) =>
        React.cloneElement(Tab, {
          active: idx === value,
          activeButtonRev: activeButtonRev,
          setActive: setActive,
          idx: idx,
          key: idx,
        })
      )}

      <span className="Tabs-line" style={{ left: lineLeft }} />
    </div>
  );
}

Tabs.TabItem = function (props) {
  const { label, active, setActive, idx, activeButtonRev } = props;

  return (
    <button
      ref={active ? activeButtonRev : null}
      className={`TabItem ${active ? "TabItem-active" : ""}`}
      onClick={(e) => setActive(idx, e.target)}
    >
      {label}
    </button>
  );
};

export { Tabs };

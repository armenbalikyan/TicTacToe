import React from "react";

// Create Box component
export const Box = props => {
  return (
    <button value={props.value} className="board__box" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

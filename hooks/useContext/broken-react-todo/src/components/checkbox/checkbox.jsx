/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import * as React from "react";
import "./checkbox.scss";

// eslint-disable-next-line arrow-body-style
export const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp }) => {
  console.log({ checked });
  return (
    <div className="checkbox w-100">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="checkbox-content"
        onClick={onClick}
        onKeyUp={onKeyUp}
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked}
          onChange={onClick}
        />
        <span className={checked ? "checkbox-checked" : ""}>{label}</span>
      </div>
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

import React from "react";
import classNames from "classnames";

export default function Panel({ className, children, ...rest }) {
  return (
    <div
      className={classNames(
        "border rounded p-3 shadow bg-white w-full cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

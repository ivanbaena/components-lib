import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = cn(rest.className, "px-3 py-1.5 border flex items-center", {
    "text-white border-blue-500 bg-blue-500": primary,
    "text-white border-gray-900 bg-gray-900": secondary,
    "text-white border-green-500 bg-green-500": success,
    "text-white border-yellow-400 bg-yellow-400": warning,
    "text-white border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  return <button {...rest} className={classes} >{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning & danger can be true"
      );
    }
  },
};

export default Button;

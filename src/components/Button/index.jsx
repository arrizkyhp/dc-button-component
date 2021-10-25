import React from 'react'
import propTypes from "prop-types";

export default function Button(props) {

    const className = [props.className];
    if(props.color === "default") className.push("btn-default");
    if(props.color ===  "primary") className.push("btn-primary");
    if(props.color === "secondary") className.push("btn-secondary");
    if(props.color === "danger") className.push("btn-danger");

    if(props.variant === "outline") className.push("btn-outline");
    if(props.variant === "text") className.push("btn-text");
    if(props.disableShadow) className.push("btn-no-shadow");
    if(props.disabled) className.push("btn-disabled");

    if(props.size === "sm") className.push("btn-sm");
    if(props.size === "md") className.push("btn-md");
    if(props.size === "lg") className.push("btn-lg");

    if (props.startIcon || props.endIcon) className.push("btn-icon");

    const onClick = () => {
        if(props.onClick) props.onClick();
    }

    return (
      <button className={`btn ${className.join(" ")}`} onClick={onClick}>
        {props.startIcon && <span class="material-icons">add_shopping_cart</span>}
        {props.children}
        {props.endIcon && <span class="material-icons">add_shopping_cart</span>}
      </button>
    );
}

Button.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    color: propTypes.string,
    variant: propTypes.string,
    disableShadow: propTypes.bool,
    disabled: propTypes.bool,
    size: propTypes.string,
}

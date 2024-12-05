import React from "react";
import formStyles from "../../styles/formStyles";

const Button = ({ type, onClick, label, isReset }) => {
    const buttonStyle = isReset ? { ...formStyles.button, ...formStyles.buttonReset } : formStyles.button;
    const buttonHoverStyle = isReset ? formStyles.buttonResetHover : formStyles.buttonHover;

    return (
        <button
            type={type}
            onClick={onClick}
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
            {label}
        </button>
    );
};

export default Button;

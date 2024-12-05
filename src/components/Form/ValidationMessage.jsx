import React from "react";
import formStyles from "../../styles/formStyles";

const ValidationMessage = ({ message }) => (
    <div style={formStyles.validationMessage}>
        {message}
    </div>
);

export default ValidationMessage;

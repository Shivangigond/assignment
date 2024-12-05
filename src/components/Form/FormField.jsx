import React from "react";
import ValidationMessage from "./ValidationMessage";
import formStyles from "../../styles/formStyles";

const FormField = ({ field, value, onChange, error }) => {
    const style = error ? { ...formStyles.input, ...formStyles.inputError } : formStyles.input;

    switch (field.type) {
        case "text":
            return (
                <div style={formStyles.fieldContainer}>
                    <label htmlFor={field.name} style={formStyles.label}>
                        {field.label}
                    </label>
                    <input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={value}
                        onChange={onChange}
                        placeholder={field.placeholder}
                        style={style}
                    />
                    {error && <ValidationMessage message={error} />}
                </div>
            );
        case "textarea":
            return (
                <div style={formStyles.fieldContainer}>
                    <label htmlFor={field.name} style={formStyles.label}>
                        {field.label}
                    </label>
                    <textarea
                        id={field.name}
                        name={field.name}
                        value={value}
                        onChange={onChange}
                        placeholder={field.placeholder}
                        style={error ? { ...formStyles.textarea, ...formStyles.textareaError } : formStyles.textarea}
                    />
                    {error && <ValidationMessage message={error} />}
                </div>
            );
        // Additional cases for other field types...
        default:
            return null;
    }
};

export default FormField;

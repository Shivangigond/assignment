import React, { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import formStyles from "../../styles/formStyles";

const FormContainer = ({ config, onSubmit }) => {
    const initialState = config.reduce((state, field) => {
        state[field.name] = field.defaultValue || "";
        return state;
    }, {});

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    const validate = (field, value) => {
        const fieldConfig = config.find((f) => f.name === field);
        let error = "";

        if (fieldConfig.required && !value) {
            error = `${fieldConfig.label} is required`;
        } else if (fieldConfig.minLength && value.length < fieldConfig.minLength) {
            error = `${fieldConfig.label} must be at least ${fieldConfig.minLength} characters long`;
        } else if (fieldConfig.maxLength && value.length > fieldConfig.maxLength) {
            error = `${fieldConfig.label} cannot exceed ${fieldConfig.maxLength} characters`;
        } else if (fieldConfig.pattern && !new RegExp(fieldConfig.pattern).test(value)) {
            error = `Invalid ${fieldConfig.label}`;
        }

        setErrors((prev) => ({ ...prev, [field]: error }));
        return error === "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const isValidField = validate(name, value);

        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setIsValid(isValidField);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allValid = config.every((field) => validate(field.name, formData[field.name]));
        setIsValid(allValid);

        if (allValid) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles.form}>
            {config.map((field) => (
                <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                />
            ))}
            <Button type="submit" label="Submit" isReset={false} />
            <Button type="button" label="Reset" isReset={true} onClick={() => setFormData(initialState)} />
        </form>
    );
};

export default FormContainer;

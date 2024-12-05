import React from "react";
import FormContainer from "./FormContainer";

const CustomForm = () => {
    const formConfig = [
        { name: "firstName", type: "text", label: "First Name", required: true, placeholder: "Enter your first name" },
        { name: "lastName", type: "text", label: "Last Name", required: true, placeholder: "Enter your last name" },
        { name: "email", type: "text", label: "Email", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", placeholder: "Enter your email" },
        { name: "feedback", type: "textarea", label: "Feedback", placeholder: "Enter your feedback" },
        { name: "subscribe", type: "switch", label: "Subscribe to Newsletter", defaultValue: false },
        { name: "gender", type: "radio", label: "Gender", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
    ];

    const handleSubmit = (data) => {
        console.log("Form Data Submitted: ", data);
    };

    return (
        <div>
            <h1>Custom Form</h1>
            <FormContainer config={formConfig} onSubmit={handleSubmit} />
        </div>
    );
};

export default CustomForm;

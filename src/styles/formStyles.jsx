// /styles/formStyles.js

const formStyles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    fieldContainer: {
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    inputError: {
        borderColor: 'red',
    },
    textarea: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    textareaError: {
        borderColor: 'red',
    },
    select: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    checkbox: {
        display: 'flex',
        flexDirection: 'column',
    },
    switch: {
        width: '40px',
        height: '20px',
        borderRadius: '20px',
        backgroundColor: '#ccc',
        position: 'relative',
        cursor: 'pointer',
    },
    switchChecked: {
        backgroundColor: '#4caf50',
    },
    switchCircle: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        top: '2px',
        left: '2px',
        transition: 'left 0.3s',
    },
    switchCircleChecked: {
        left: '22px',
    },
    button: {
        padding: '12px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
    },
    buttonReset: {
        backgroundColor: '#f44336',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    buttonResetHover: {
        backgroundColor: '#d32f2f',
    },
    validationMessage: {
        color: 'red',
        fontSize: '12px',
        marginTop: '4px',
    },
};

export default formStyles;

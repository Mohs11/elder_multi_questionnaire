import React from 'react';

const Button = ({ children, onClick, type, addClassName }) => {
    let color = 'green';
    if (type === 'error') color = 'red';
    return (
        <button onClick={onClick} className={`bg-${color}-500 hover: bg-${color}-700 focus:outline-none py-3 px-6 text-white shadow rounded ${addClassName}
        `}>{children}</button>
    )
}
export default Button;
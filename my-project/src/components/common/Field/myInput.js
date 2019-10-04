import React from 'react';
import './myInput.scss';

const myInput = (props) => {
    const { input, type, placeholder, meta: {error, touched} } = props;
    return (
        <>
            <input {...input} type={type} placeholder={placeholder} />
            {error &&
                touched &&
                <div>
                    {error}
                </div>
            }
        </>
    )
}

export default myInput;
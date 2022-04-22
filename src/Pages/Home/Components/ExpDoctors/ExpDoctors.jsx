import React from 'react';

const ExpDoctors = (props) => {
    const { img, h1, p, phone } = props
    return (
        <>
            <div className="expDoctor">
                <img src={img} alt="doctor" />
                <h1>{h1}</h1>
                <p>{p}</p>
                <div className="phone">
                    <p>{phone}</p>
                </div>
            </div>
        </>
    )
}


export default ExpDoctors;
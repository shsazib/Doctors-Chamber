import React from 'react';


const ServicesCard = (prop) => {
    const { img, h2, p } = prop;
    return (
        <>
            <div className="card">
                <img src={img} alt="neurologyImage" />
                <h2>{h2}</h2>
                <p>{p}</p>
            </div>
        </>
    )
}

export default ServicesCard;
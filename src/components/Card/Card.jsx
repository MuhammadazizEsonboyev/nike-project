import React from 'react'
import "./Card.css"
const Card = (props) => {
    const { img, title, text, btn } = props;

    return (
        <>
<div className="cart">
    <div className="card">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    {btn}
                </div>
            </div>
</div>
            

        </>
    )
}

export default Card
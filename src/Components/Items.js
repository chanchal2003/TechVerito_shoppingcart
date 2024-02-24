import React, { useState } from "react";
import { Products } from "./Products";



const Items = ({ title, description, price, img, quantity, removeItem, id ,increment,decrement}) => {

    return (
        <>
            <div className="cart-items-container">
                <div className="items-info">
                    <div className="products-img">
                        <img src={img}></img>
                    </div>
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus" onClick={()=>decrement(id)}></i>
                    <input type="text" placeholder={quantity}></input>
                    <i className="fa-solid fa-plus" onClick={()=>increment(id)}></i>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="remove-item">
                    <i className="fa-solid fa-trash-alt" onClick={() => removeItem(id)}></i>
                </div>

            </div>
        </>
    )
}

export default Items
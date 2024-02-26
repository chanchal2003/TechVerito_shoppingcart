import React, { useState } from "react";
import "./cartnew.css";
import Scrollbars from "react-custom-scrollbars-2";
import Items from "./Items";
import { Products } from "./Products";
import ShowCart from "./ShowCart";

const Cart = () => {
  const [item, setItem] = useState(Products);
  const [show, setShow] = useState(false);
  const [totalCount, setTotalCount] = useState(Products.length); // Initial total count

  const removeItem = (itemId) => {
    const updatedCart = item.filter((item) => item.id !== itemId);
    setItem(updatedCart);
    setTotalCount(updatedCart.length);
  };

  const addItem = (newItem) => {
    const updatedCart = [...item, newItem];
    setItem(updatedCart);
    setTotalCount(updatedCart.length);
  };

  const clearCart = () => {
    setItem([]);
    setTotalCount(0);
  };

  const increment = (itemId) => {
    const updatedCart = item.map((curItem) => {
      if (curItem.id === itemId) {
        return { ...curItem, quantity: curItem.quantity + 1 };
      } else {
        return curItem;
      }
    });
    setItem(updatedCart);
  };

  const decrement = (itemId) => {
    const updatedCart = item
      .map((curItem) => {
        if (curItem.id === itemId) {
          return { ...curItem, quantity: curItem.quantity - 1 };
        } else {
          return curItem;
        }
      })
      .filter((curItem) => {
        return curItem.quantity !== 0;
      });
    setItem(updatedCart);
  };

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img
            src="./images/cart.png"
            alt="cart"
            onClick={() => setShow(!show)}
          />
          {show && <ShowCart />}
          <p>{totalCount}</p> {/* Display total count of items */}
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have<span className="total-items-count"> {totalCount} </span>
          items in shopping cart
        </p>
        <div className="cart-items">
          <Scrollbars style={{ width: 1200, height: 350 }}>
            {item.map((curItem) => {
              return (
                <Items
                  key={curItem.id}
                  id={curItem.id}
                  {...curItem}
                  removeItem={removeItem}
                  increment={increment}
                  decrement={decrement}
                />
              );
            })}
          </Scrollbars>
        </div>

        <div className="cart-total">
          <h3>Cart Total : <span>220rs</span></h3>
        </div>
        <button onClick={clearCart}>Clear Cart</button>
      </section>
    </>
  );
};

export default Cart;

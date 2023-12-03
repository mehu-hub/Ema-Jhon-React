import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartShopping, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    // const cart = props.cart; --- option 1
    // const { cart } = props;  --- option 2 

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 3 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div>
            <h2 className='order-summary'>Order Summary</h2>
            <hr />
            <div className='cart-list'>
                <p><FontAwesomeIcon icon={faCartShopping} /> {cart.length} item</p>
                <div className='cart-list-single'>
                    <p>Total Price:</p>
                    <p>${total}</p>
                </div>
                <div className='cart-list-single'>
                    <p>Shipping:</p>
                    <p>${totalShipping}</p>
                </div>
                <div className='cart-list-single'>
                    <p>Tax:</p>
                    <p>${tax.toFixed(0)}</p>
                </div>
                <hr />
                <div className='cart-list-single'>
                    <h3>Grand Total:</h3>
                    <h3>${grandTotal.toFixed(0)}</h3>
                </div>
            </div>
            <div className='cart-btn'>
                <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;
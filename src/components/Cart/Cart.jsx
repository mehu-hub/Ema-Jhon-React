import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBicycle, faCartShopping, faDeleteLeft, faDrum, faDrumstickBite, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    // const cart = props.cart; --- option 1
    // const { cart } = props;  --- option 2 

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    
    return (
        <div>
            <h2 className='order-summary'>Order Summary</h2>
            <hr />
            <div className='cart-list'>
                <p><FontAwesomeIcon icon={faCartShopping} /> {cart.length} item</p>
                <p>Total Price: ${total}</p>
                <p>Shipping: $  </p>
                <p>Tax: $  </p>
                <h3>Grand Total: $</h3>
            </div>
            <div className='cart-btn'>
                <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddtoCart = props.handleAddtoCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='name'>{name}</h4>
                <h5 className='price'>Price: ${price}</h5>

                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div>
                <button className='add-to-cart' onClick={() => handleAddtoCart(props.product)}>Add to Card <FontAwesomeIcon icon={faCartShopping} /></button> 
            </div>
        </div>
    );
};

export default Product;
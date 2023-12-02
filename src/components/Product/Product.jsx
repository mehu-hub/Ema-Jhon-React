import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='name'>{name}</h4>
                <h5 className='price'>Price: ${price}</h5>

                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='add-to-cart'>Add to Card</button>
        </div>
    );
};

export default Product;
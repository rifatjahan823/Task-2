import React from 'react';
import service from '../../../img/service/services.jpg'

const Product = () => {
    return (
        <div id="product" className='container py-5'>
            <h2 className='product-title'>Product and Service</h2>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <h3>Lts See vWhat We Provide</h3>
                    <h4>Issue Management</h4>
                </div>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={service} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Product;
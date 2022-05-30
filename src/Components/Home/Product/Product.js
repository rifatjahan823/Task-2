import React from 'react';
import service from '../../../img/service/services.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import Reveal from 'react-reveal/Reveal';
import './Product.css'
import { Zoom } from 'react-reveal';

const Product = () => {
    return (
        <div id="product" className='container py-5'>
            <h2 className='product-title mb-5'>Product <span style={{color:'#FF6F00'}}>and Service</span></h2>
            <div className='row g-4 align-items-center '>
                <div className='col-md-6 col-12 text-md-start text-center'>
                    <div className='product-content'>
                    <h3>Issue Management</h3>
                    <div className='row'>
                    <div className='col-md-6 col-12'>
                    <h5>Coppertech Industreis LTD</h5>
                 <p>   <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Prospectus</p>
                   <p> <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Abridged Version</p>
                   <h5>Zaheen Spinning LTD</h5>
                        <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Prospectus</p>
                       <p> <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Abridged </p>
                    </div>
                    <div className='col-md-6 col-12'>
                    <h5>Oimex Electrode Limited</h5> 
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Prospectus</p>
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> IPO Application Proces</p>
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> List Of IPO Application</p>
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> List IPO Result</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <Zoom>
                    <img className='img-fluid' src={service} alt="" />
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Product;
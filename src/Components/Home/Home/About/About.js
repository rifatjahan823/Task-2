import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import about from '../../../../img/about/money-financial-business-growth-concept-1223989.jpg'

const About = () => {
    return (
        <div id="about" className='container my-5'>
            <h2 className='product-title mb-5'>Product <span style={{color:'#FF6F00'}}>and Service</span></h2>
            <div className='row g-4 align-items-center '>
            <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={about} alt="" />
                </div>
                <div className='col-md-6 col-12 text-md-start text-center'>
                    <div className='product-content'>
                    <div className='row'>
                    <div className='col-md-6 col-12'>
                 <p>  <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Capital Profile</p>
                   <p> <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Mission Version</p>
                        <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Board and Directors</p>
                       <p> <FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Contracts </p>
                    </div>
                    <div className='col-md-6 col-12'>
                      <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Management Excutive</p>
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> IPO Circulation</p>
                    <p><FontAwesomeIcon className='icon' icon={faCircleArrowRight} /> Career oppournity</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import './Client.css'
import bg from '../../../../img/client-section/trusted-services_pic_2360x714.ashx';
import Reveal from 'react-reveal/Reveal';
import { Zoom } from 'react-reveal';

const Client = () => {
    return (
        <div className='client-area' style={{backgroundImage: `url(${bg})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"80px 0",backgroundAttachment:"fixed",marginTop:"50px"}}>
         <div id="client" className='container'>
         <h2 className='product-title mb-5'>Become <span style={{color:'#FF6F00'}}>a Client</span></h2>
         <Zoom>
         <p>We have a lots of client See Our Client List <br></br> Bangladeshi Indicidual || Bangladeshi Institution || Foregin Investors || NRBs || Daily Market Company <br></br> We always Provide Our Best Services</p>
         </Zoom>
            <button className='btn'>See More</button>
         </div>
        </div>
    );
};

export default Client;
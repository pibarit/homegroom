import React from 'react';
import Svg from './Svg';
import Navbar from './navbar';
import img1 from '../imgs/images.jpg'
import img2 from '../imgs/sigin.jpg'

const Page1 = () => {
  return (
<> <div className='background' style={{}}>
    <Navbar/>
    <div className='content'>
      <div className='text'>
      <h1>Customer's Choice Homegroom</h1>
      <p>Finding a reliable online services is no more difficult specially when it comes to domestic help. so what are you waiting for click the button below.</p>
      <button className="btn">Book Now</button>
      </div>
      <div className='homeimgs'>
      <div className='imgright'> <img src={img1} style={{height:'200px', width:'300px' ,borderRadius:'12px'}}alt="" /></div>
      <div className='imgleft'> <img src={img2} style={{height:'200px'  ,width:'300px' ,borderRadius:'12px'}} alt="" /></div>
    </div>
      </div>
    </div>
    <Svg className='curve'/>
</>
  );
}

export default Page1;

import React from 'react';
import './Header.css';
import Grocery from './img/Grocery.png';
import Mobile from './img/Mobile.png';
import Fashion from './img/Fashion.png';
import Electronics from './img/Electronics.png';
import home from './img/home.png';
import Appliances from './img/Appliances.png';
import Travel from './img/Travel.png';
import Top from './img/Top.jpg';
import Beauty from './img/Beauty.png';
import Two from './img/Two.png';
import Card from '@mui/material/Card';

const Header = () => {
  return (
    <>
  <Card >
  <div className='header'>
        <div className='img'>
          <img className='images' src={Grocery} alt='grocery'/>
          <div className='name'>Grocery</div>
        </div>

        <div className='img'>
          <img className='images' src={Mobile} alt='mobile'/>
          <div className='name'>Mobiles</div>
        </div>

        <div className='img'>
          <img className='images' src={Fashion} alt='fashion'/>
          <div className='name'>Fashion</div>
        </div>

        <div className='img'>
          <img className='images' src={Electronics} alt='electronics'/>
          <div className='name'>Electronics</div>
        </div>

        <div className='img'>
          <img className='images' src={home} alt='home'/>
          <div className='name'>Home</div>
        </div>

        <div className='img'>
          <img className='images' src={Appliances} alt='appliances'/>
          <div className='name'>Appliances</div>
        </div>

        <div className='img'>
          <img className='images' src={Travel}  alt='travel'/>
          <div className='name'>Travel</div>
        </div>

        <div className='img'>
          <img className='images' src={Top} alt='top'/>
          <div className='name'>Top Offers</div>
        </div>

        <div className='img'>
          <img className='images' src={Beauty} alt='beauty'/>
          <div className='name'>Beauty,Toys & More</div>
        </div>

        <div className='img'>
          <img className='images' src={Two} alt='two'/>
          <div className='name'>Two Whellers</div>
        </div>
      </div>
      </Card>
    </>
  );
};
export default Header;
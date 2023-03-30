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
  <Card sx={{ minWidth: 275 }}>
  <div className='header'>
        <div className='img'>
          <img className='images' src={Grocery}  />
          <h4>Grocery</h4>
        </div>

        <div className='img'>
          <img className='images' src={Mobile} />
          <h4>Mobiles</h4>
        </div>

        <div className='img'>
          <img className='images' src={Fashion} />
          <h4>Fashion</h4>
        </div>

        <div className='img'>
          <img className='images' src={Electronics} />
          <h4>Electronics</h4>
        </div>

        <div className='img'>
          <img className='images' src={home} />
          <h4>Home</h4>
        </div>

        <div className='img'>
          <img className='images' src={Appliances} />
          <h4>Appliances</h4>
        </div>

        <div className='img'>
          <img className='images' src={Travel} />
          <h4>Travel</h4>
        </div>

        <div className='img'>
          <img className='images' src={Top} />
          <h4>Top Offers</h4>
        </div>

        <div className='img'>
          <img className='images' src={Beauty} />
          <h4>Beauty, Boys and More</h4>
        </div>

        <div className='img'>
          <img className='images' src={Two} />
          <h4>Two Whellers</h4>
        </div>
      </div>
      </Card>
    </>
  );
};
export default Header;
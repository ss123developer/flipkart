import React from 'react';
import { AppBar,  Toolbar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NavBar.css';
import flipKart from './img/flipkart.png';
function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
        <img src={flipKart} alt='flipkart'/>
        <br/><br/>
        <input type="search" placeholder='Search for products, brands and more'  spacing={5} sx={{ m : 2}} style={{flexGrow:1}} starIcon={ <SearchOutlinedIcon/>}/>
        <Stack spacing={8} direction="row">
        <Button variant='contained' color='primary' style={{flexGrow:1, backgroundColor:'white', color:'blue'}}><div  className='title'>Login</div></Button>
       <Button  variant="text"  color='inherit' style={{ color:'white', width:'24%'}}><div className='title'>Become a Seller</div></Button>
        <Button variant='text' color='inherit'> <h5> More </h5> </Button>
      <Button color='inherit'  sx={ { m:2 } } startIcon={<ShoppingCartIcon/>}><div className='title'>Cart</div></Button>
         </Stack>
         </Toolbar>
        </AppBar>
    </div>
  );
}
export default NavBar;
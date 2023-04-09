 //import React from 'react';
 //import { AppBar,  Toolbar } from '@mui/material';
//import './NavBar.css';
// import flipKart from './img/flipkart.png';
// //import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';

// function NavBar() 
// {
// return (
//     <div>
//       <AppBar className='sp'>
//         <Toolbar>
//           <img src={flipKart} alt='flipkart' />
//           <br /><br />
//           <section className="f-logo">
//           <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
//         </section>
//           <br /><br />
//           <Box component="form" noValidate autoComplete="off">
//       <FormControl sx={{ width : '600px' , marginTop : '10px' , height:'40px',  marginBottom : '20px'  }}>
//         <OutlinedInput placeholder="Search for products, brands & more" style={{ backgroundColor : 'white', borderColor: 'white'}} />
//      </FormControl>
//        </Box>
// </Toolbar>
//       </AppBar>
//     </div>
// );
// }
// export default NavBar;


// import React from "react";
// // import { useState } from "react";
// import './NavBar.css';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import flipkart from './img/flipkart.png';
// import { styled, alpha } from '@mui/material/styles';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// })); 

// function NavBar() 
// {
// // const [placeholder, setPlaceholder] = useState("Search for products,brands and more");
// //     function handleFocus() {
// //         if (placeholder === "Search for products,brands and more") {
// //           setPlaceholder("Search for products,brands and more");
// //         }
// //       }

// // const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

//   // const [anchorElM, setAnchorElM] = React.useState(null);
//   // const openM = Boolean(anchorElM);
//   // const handleClickM = (event) => {
//   //   setAnchorElM(event.currentTarget);
//   // };
//   // const handleCloseM = () => {
//   //   setAnchorElM(null);
//   // };

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };


// return(
//      <>
//      <div className="nav-cnt">
//         <section className="f-logo">
//             <img className="flip-img" src={flipkart} alt="flipkart"></img>
//             <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
//         </section>

//         <div>
//             <TextField className="inp-box" sx={{backgroundColor : 'white' , width : '600px' , marginTop : '10px' , marginBottom : "5px", borderRadius : "3px", }} id="outlined-basic"  placeholder="Search for products,brands and more" variant="outlined" />
//         </div>
//        <div>
          
//             <Button style={{backgroundColor : 'white' , width : '100px', marginTop : '12px' , marginLeft : '30px' ,marginRight : '10px'}} variant="outlined"><div className="div-button">Login</div></Button>
          
//         </div> 
//          {/* <div>
//         <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="text"
//         disableElevation
//         onClick={handleClickM}
//         style={{marginTop : '15px' ,marginLeft : '15px', color: 'white' }} 
//         style={{backgroundColor : 'white' , width : '100px', marginTop : '12px' , marginLeft : '30px' ,marginRight : '10px'}}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//        <div className="title">Login</div>
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorE1M={anchorElM}
//         openM={openM}
//         onClose={handleCloseM}
//       >
//          <MenuItem onClick={handleCloseM} disableRipple>
//           <div className="title">New Customer </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <AccountCircleIcon />
//           <div className="title"> My profile </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <AddIcon/>
//           <div className="title"> Flipkart Plus Zone </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <DownloadIcon />
//        <div className="title"> Orders </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <FavoriteIcon />
//           <div className="title">  Wishlist </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <LiveHelpIcon />
//           <div className="title"> Rewards </div>
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleCloseM} disableRipple>
//           <MovingIcon/>
//           <div className="title"> Gift Cards</div>
//         </MenuItem>
//       </StyledMenu>
//         </div>  */}
//             <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Become a seller</div></Button>
//         </div>
         
//         <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="text"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         Options
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} disableRipple>
//           <EditIcon />
//           Edit
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <FileCopyIcon />
//           Duplicate
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleClose} disableRipple>
//           <ArchiveIcon />
//           Archive
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           <MoreHorizIcon />
//           More
//         </MenuItem>
//       </StyledMenu>
//     </div>
//           <div>
//         <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text" startIcon={<ShoppingCartIcon  sx={{ color: "white" }}/>}><div className="div-btn">cart</div></Button>
//         </div>

// </>
//     );
// }
// export default NavBar;



import React, { useState } from "react";
// import { useState } from "react";
import './NavBar.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import flipkart from './img/flipkart.png';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import MovingIcon from '@mui/icons-material/Moving';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText  from "@mui/material/DialogContentText";
import DialogActions  from "@mui/material/DialogActions";
// import Box from '@mui/material/Box';
// import { Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function NavBar()
{
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 
  
  // const [opened, setOpened] = useState(false);

  const [opening, setOpening] = React.useState(false);

    const handleClickOpen = () => {
        setOpening(true);
    };

    const handleClickClose = () => {
        setOpening(false);
    };
 return(
     <>
     <div className="nav-cnt">
     <section className="f-logo">
             <img className="flip-img" src={flipkart} alt="flipkart"></img>
             <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
         </section>
       
       {/* <div>
        <Button onClick={()=>setOpened(true)} style={{backgroundColor : 'white' , width : '100px', marginTop : '12px' , marginLeft : '30px' ,marginRight : '10px', color: 'blue'}} variant="contained"><div className="div-btn">Login button</div></Button>
         <Dialog open={opened} onClose={() => setOpened(false)} >
<DialogTitle>This is dialog box</DialogTitle>
<DialogContent>
  <DialogContentText>
    hi
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button>Login</Button>
</DialogActions>
</Dialog>
</div> */}

        <div>
            <TextField className="inp-box"  sx={{backgroundColor : 'white' , width : '600px' , marginTop : '10px' , marginBottom : "5px", borderRadius : "3px", }} id="outlined-basic"  placeholder="Search for products,brands and more" variant="outlined"  endIcon={<KeyboardArrowDownIcon />}/>
         </div>

       <div>
          <Button onClick={handleClickOpen} style={{backgroundColor : 'white' , width : '100px', marginTop : '12px' , marginLeft : '30px' ,marginRight : '10px'}} variant="outlined"><div className="div-button">Login</div></Button>
          {/* <Dialog open={opened} onClose={() => setOpened(false)} >
<DialogTitle>This is dialog box</DialogTitle> 
<DialogContent>
  <DialogContentText>
   <div className="container">
    <div className="right">
    <Box
      component="form"
      className="box"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-basic" label="Enter Mobile Number" variant="standard" />
    <br/><br />
   <Typography className="ty">  By continuing, you agree to Flipkart's <p>Terms of Use</p> and <p>Privacy Policy</p>. </Typography>
   <button className="one">CONTINUE</button>
   <br /><br />
   <button className="two">Existing User ? Log in</button>
   <br/><br />
   <div className="left">
    <h4>Look's like you're new here!</h4>
    <br/>
    <p className="para">Sign up with your mobile number to get started</p>
   </div>
    </Box>
    </div>
   </div>
  </DialogContentText>
</DialogContent>
<DialogActions>
</DialogActions>
</Dialog> */}
<Dialog open={opening} onClose={handleClickClose}>
                            <div className="dial-cnt">
                                <div className="dial-left">
                                    <div className="left-tlt">Login</div>
                                    <div className="left-txt">Get access to your <br />Orders, Wishlist and Recommendations</div>
                                </div>
                                <div className="dial-right">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Enter Email/Mobile number"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <div className="right-txt">By continuing, you agree to Flipkart's <a className="dial-a-tag" href="terms of use">Terms of Use</a> and <a className="dial-a-tag" href="privacy policy">Privacy Policy</a>.</div>
                                    <DialogActions>
                                        <button style={{ border: 'none', backgroundColor: '#fb641b', width: '100%', marginTop: '10px', height: '50px' }}><div style={{ color: '#ffffff' }}>Request OTP</div></button>

                                    </DialogActions>
                                    <div className="dial-bottom-link">
                                        <a className="dial-a-tag" href="newaccount">New to Flipkart? Create an account</a>
                                    </div>
                                </div>
                                <div>
                                    <CloseIcon onClick={handleClickClose} />
                                </div>
                            </div>
                            </Dialog>
          </div>
        

        <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Become a seller</div></Button>
        </div>

        {/* <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">More</div></Button>
        </div> */}

        <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="title"
        disableElevation
        onClick={handleClick}
        style={{color : 'white', marginTop : '15px' , marginLeft : '15px'}}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <div className="title">More</div>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <NotificationsIcon style ={{color : "blue"}} />
        <div className="title">Notification Preferences</div>  
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <LiveHelpIcon  style ={{color : "blue"}} />
          <div className="title">24x7 Customer Care</div>  
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <MovingIcon style ={{color : "blue"}} />
          <div className="title">Advertise</div>  
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <DownloadIcon style ={{color : "blue"}} />
          <div className="title">Download App</div>  
        </MenuItem>
      </StyledMenu>
    </div>

        <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text" startIcon={<ShoppingCartIcon  sx={{ color: "white" }}/>}><div className="div-btn">cart</div></Button>
        </div>
</div>
</>
    )
}
export default NavBar;
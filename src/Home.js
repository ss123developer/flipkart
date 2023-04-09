import React from 'react';
// import './Home.css';
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Electronics from './Electronics';
function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <Carousel />
            <Electronics />
            <Footer />
        </>
    );
};
export default Home;

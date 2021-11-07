import React from 'react';
import Body from '../Body/Body';
import Consultancy from '../Consultancy/Consultancy';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Body></Body>
            <Products></Products>
            <Consultancy></Consultancy>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React, { Fragment } from 'react';
import Slide from './Slide'
import Newsletter from './Newsletter'
import Footer from './Footer';
import Header from '../components/Header';
import Section from './Section';

const Body = () => {
    return ( 
       <Fragment>
        <div className="Main">
            <Header />
            <Slide />
            <Section />
            <Newsletter />
            <Footer />
        </div>
        
        </Fragment>
     );
}
 
export default Body;
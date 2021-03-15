import React, { Fragment } from 'react';
import Products from './Products';

const Section = () => {
    return ( 
        <Fragment>
            <div className="container catalogo">
                <h4>Mais Vendidos</h4>
                <div className="gray-slash"></div>
                <Products />
            </div>
        </Fragment>
     );
}
 
export default Section;

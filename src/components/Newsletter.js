import React, { Fragment } from 'react';
import HookForm from './Form';

const Newsletter = () => {
    return ( 
        <Fragment>
            <div className="container-fluid news">
                <div className="news-content">
                    <h2 className="text-center">Participe de nossas news com promoções e novidades!</h2>
                    <div className="form-contact">
                        <HookForm />
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Newsletter;
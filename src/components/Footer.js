import React, { Fragment } from 'react';
import LogoWhite from '../images/logo-white.svg';
import PwrBy from '../images/poweredby.svg';
import Message from '../images/icon-message.svg';
import HeadPhones from '../images/icon-headphones.svg';

const Footer = () => {
    return ( 
        <Fragment>
            <div className="info-footer">
                <div className="container footer h-100 d-flex justify-content-between align-items-center">
                    <div className="info-contact">
                        <h3>Localização</h3>
                        <div className="slash"></div>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                        <p>Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div>
                    <div className="buttons-footer">
                        <button className="btn"><img src={Message} alt=""/>ENTRE EM CONTATO</button>
                        <button className="btn"><img src={HeadPhones} alt=""/>FALE COM O NOSSO CONSULTOR ONLINE</button>
                    </div>
                    <div className="logos-footer">
                        <div className="createdby">
                            <span>Created by</span>
                            <img src={LogoWhite} alt=""/>
                        </div>
                        <div className="poweredby">
                            <span>Powered by</span>
                            <img src={PwrBy} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Footer;

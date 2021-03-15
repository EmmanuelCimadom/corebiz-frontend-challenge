import React from 'react';
import logo from '../images/logo.svg';
import search_icon from '../images/search_icon.png'
import shopping_cart from '../images/shopping-cart.png'
import user_icon from '../images/user.png'
import burguer_icon from '../images/burguericon.svg'
//import './App.css';

const Header = () => {
  return ( 
      <header className="Header">
          <div className="container menu p-x-0 d-flex justify-content-between ">
              
              <div className="logo">
                  <img src={logo} className="corebiz-logo" alt="logo" />
              </div>
              <div className="search">
                  <input type="text" placeholder="O que está procurando?"/>
                  <img src={search_icon} className="btn" alt=""/>
              </div>
              <div className="acc-shop">
                  <div className="my-acc">
                      <a href="/"><img src={user_icon} alt=""/></a>
                      <a href="/"><h5>Minha Conta</h5></a>
                  </div>
                  <div className="my-shop">
                      <img src={shopping_cart} alt=""/>
                  </div>
              </div>
          </div>

            <div className="container mobile p-x-0 d-flex justify-content-between ">
           
                <div className="dropdown">
                    <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={burguer_icon} alt=""/>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">Minha Conta</a>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} className="corebiz-logo" alt="logo" />
                </div>
                <div className="acc-shop">
                    <div className="my-shop">
                        <img src={shopping_cart} alt=""/>
                    </div>
                </div>
            </div>
         

      </header>
   );
}
 
export default Header;

import React, { Fragment } from 'react';
import slide1 from '../images/slide1.png';

const Slide = () => {
    return ( 
        <Fragment>
            <div className="container-fluid">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slide1} alt="First slide"></img>
                            <div className="text-slide">
                                <h4>Olá, o que você está buscando?</h4>
                                <h2>Criar ou migrar seu e-commerce?</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide1} alt="Second slide"></img>
                            <div className="text-slide">
                                <h4>Olá, o que você está buscando?</h4>
                                <h2>Criar ou migrar seu e-commerce?</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide1} alt="Third slide"></img>
                            <div className="text-slide">
                                <h4>Olá, o que você está buscando?</h4>
                                <h2>Criar ou migrar seu e-commerce?</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide1} alt="Third slide"></img>
                            <div className="text-slide">
                                <h4>Olá, o que você está buscando?</h4>
                                <h2>Criar ou migrar seu e-commerce?</h2>
                            </div>
                        </div>
                    </div>
                </div>                                    
            </div>
        </Fragment>
     );
}
 
export default Slide;
import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';
import Rating from '@material-ui/core/Rating';

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

class Products extends Component {
    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }

      
    
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="container products">
                
                <Carousel breakPoints={breakPoints}>
                {items.map(item => (
                        <div key={item.id} className="carousel-products">
                            <div className="card">
                                <img className="img-fluid" src={item.imageUrl} alt=""/>
                                <div className="card-body">
                                    <p className="card-title">{item.productName}</p>
                                    <Rating name="half-rating" defaultValue={item.stars} precision={0.5} />
                                    <p className="listPrice">de R$ {item.listPrice}</p>
                                    <p className="price">por R$ {item.price} </p>
                                    <button className="buy-btn">COMPRAR</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                    
            </div>
        );

    }

}

export default Products;
import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import style from './product-card.css';

export default class ProductCard extends React.Component{
    render(){

        let card = this.props.data;

        return(
            <div className={style.card +" col-sm-3"}  >
                <img className="card-img-top" src={card.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <h5 className="card-title">Price: {card.price}</h5>
                        <p className="card-text">{card.description}</p>
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
            </div>

    )
    }
}


  
ProductCard.propTypes = {
    data: PropTypes.shape({
        
        name : PropTypes.string,
        price : PropTypes.number.isRequired
      })
}
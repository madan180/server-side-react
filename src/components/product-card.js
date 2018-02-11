import React from 'react';
//import ReactDOM from 'react-dom';

export default class ProductCard extends React.Component{
    render(){

        let card = this.props.data;

        return(
            <div className="card col-sm-3" >
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
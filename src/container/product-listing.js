import React, {Fragment} from 'react';
import Filter from '../components/filter';
import ProductCard from '../components/product-card';
import Search from '../components/search';
import Sorting from '../components/sorting';

export default class ProductListing extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products: [ ],
            searchString : ""
        }
            this.searchHandler = this.searchHandler.bind(this);
            this.filterHandler = this.filterHandler.bind(this);
    }

    componentDidMount(){
        fetch("products.json")
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                this.setState({
                    products : data.products
                })
            });
    }

    searchHandler (searchKey){
        this.setState({
            searchString:searchKey
        })
    }

    filterHandler(filterKey){
        this.setState({
            filterString:filterKey
        })
    }

    createCardList () {
        let searchString = this.state.searchString;
        let filterString = this.state.filterString;
        let filteredCards = this.state.products;

        if(searchString !== ""){
            filteredCards = this.state.products.filter((item) => {
                return item.name == searchString;
            });
        }

        if(filterString!==undefined && filterString !== ""){
            filteredCards = this.state.products.filter((item) => {
                return item.category == filterString;
            });
        }

        let cards = filteredCards.map((item, index) => {
                return (
                    <ProductCard key={index} data = {item} ></ProductCard>
                )
        });
        return cards;

    }

    render(){



        return(
            <Fragment>
                <div className="row">
                    <div className="col-sm-10">
                        <Search searchHandler = {this.searchHandler}></Search>
                    </div>
                    <div className="col-sm-2">
                        <Sorting></Sorting>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <Filter filterHandler = {this.filterHandler}></Filter>
                    </div>
                    <div className="col-sm-10">
                        {
                            this.createCardList()
                        }
                    </div>
                </div>
            </Fragment>
    )
    }
}
import React from 'react';
//import ReactDOM from 'react-dom';

export default class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filterString : ""
        }
    }

    onFilterClick(evt){
        
         this.setState({
            filterString: evt.target.value
        })
    }

    onFilter(evt){
        
       

        this.props.filterHandler(evt.target.value);
    }
    render(){
        return(
            <div>Filter <br/>
            <input type="radio" checked={this.state.filterString === ""} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value=""/>All<br/>
            <input type="radio" checked={this.state.filterString === "shirt"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="shirt"/>Shirt<br/>
            <input type="radio" checked={this.state.filterString === "trouser"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="trouser"/>Trouser<br/>
            <input type="radio" checked={this.state.filterString === "tshirt"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="tshirt"/>T-Shirt<br/>
            <input type="radio" checked={this.state.filterString === "kurta"} onClick={ evt => this.onFilterClick(evt)} onChange={ evt => this.onFilter(evt)} value="kurta"/>Kurta<br/>
            </div>
    )
    }
}
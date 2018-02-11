import React from 'react';
//import ReactDOM from 'react-dom';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchString : ""
        }
    }

    onKeyInput(evt) {

        this.setState({
            searchString: evt.target.value
        })
    }

    onSearch(evt){
        this.props.searchHandler(this.state.searchString);


    }

    render(){
        return(
            <div>
                <input value={this.state.searchString}
                       onChange = {(evt) => { this.onKeyInput(evt)}}
                       placeholder="Type your search key workd here" type="text"></input>
                <button className="btn btn-primary" onClick={ evt => this.onSearch(evt)}>Search</button>
            </div>
    )
    }
}
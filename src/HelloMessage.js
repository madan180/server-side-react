import React from 'react';
//import ReactDOM from 'react-dom';

export default class HelloMessage extends React.Component{
	render(){
		return(
				<h1>Hi {this.props.name}</h1>
			)
	}
}
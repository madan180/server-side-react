import React from 'react';
import ProductListing from "./container/product-listing";
import {createStore, applyMiddleware} from 'redux';
import PLPReducers from './reducers/plp-reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(PLPReducers, {products : []}, applyMiddleware(thunk));

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ProductListing></ProductListing>    
            </Provider>
            
        )
    }
}
import React, { Component } from 'react';
import Summary from './Summary';
import Total from './Total';
import './App.css';

class Cart extends Component {
    render(){
        
    return(
        <div>
        <Summary 
            state={this.props.state}
            USCurrencyFormat={this.props.USCurrencyFormat}/>

        <Total 
            state={this.props.state}
        />

        </div>
    )

    
        
    }

}

export default Cart;
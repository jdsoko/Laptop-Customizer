import React, { Component } from 'react';
import Features from './Features';
import './App.css';

class MainForm extends Component {
    render(){
        return (
            <div>
            <header>
                <h1>ELF Computing | Laptops</h1>
            </header>  
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
                features={this.props.features}
                USCurrencyFormat={this.props.USCurrencyFormat}
                state={this.props.state} 
                updateFeature={this.props.updateFeature}/>
          </form>
          </div>
        )
    }
}

export default MainForm;
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json'
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        productData:JSON
      }
    }
    
    render(){return (
        <div>
            <Header userInput={(data) => {console.log('inside home',data)}}/>
            <ProductDisplay prodData={this.state.productData}/>
            <Footer year='2022' month='august'/>
        </div>
    )}
    
}
export default App;
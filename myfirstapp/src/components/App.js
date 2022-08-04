import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        productData:JSON
      }
    }
    
    render(){return (
        <div>
            <Header/>
            <ProductDisplay proddata={this.state.productData}/>
            <Footer year='2022' month='august'/>
        </div>
    )}
    
}
export default App;
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db2.json'
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        productData:JSON,
        filteredData:JSON
      }
    }
    filterData = (keyword) => {
        
      let output = this.state.productData.filter((data) => {
          return (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
      })
      console.log("in filter",output)

      this.setState({filteredData:output})
  }

    
    render(){return (
      //in header component props is assigned from child to parent
      //in productDisplayComponent state is assigned as props
    
        <div style={({backgroundColor:'burlywood'})}>
            <Header userInput={(data) => {this.filterData(data)}}/> 
            <ProductDisplay prodData={this.state.filteredData}/>
            <Footer year='2022' month='august'/>
        </div>
    )}
    
}
export default App;
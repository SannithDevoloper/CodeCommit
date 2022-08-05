import React from 'react';

import './product.css';


const ProductDisplay=(props)=> {
    console.log('in products',props)


    const renderProduct=props.prodData.map((item) =>{

      return(
        
        <div className="card" key={item.id} >
        <img src={item.image} alt={item.name}/>
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs.{item.cost}</p>
         
          
        </div>
    </div>

    )
      })

    
  return (
    
    <div className="main" >
    
      <h1>QuickSearch</h1>
     {renderProduct}
      
     

      
    </div>
  )
}

export default ProductDisplay

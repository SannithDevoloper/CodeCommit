import React,{Component} from 'react';
import './placeOrder.css';



class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'sannith',
            email:'sannith@gmail.com',
            cost:0,
            phone:8790487464,
            address:"nizamabad",
            menuItem:''
        }
    }

  
    render(){
        return(
            <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                 <h3>Your Order Form Restaurant {this.state.hotel_name}</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="row">
                       
                             <div className="form-group col-md-6">
                                 <label>Name</label>
                                 <input className="form-control" name="name"
                                 value={this.state.name} onChange={this.handleChange}/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label>Email</label>
                                 <input className="form-control" name="email"
                                 value={this.state.email} onChange={this.handleChange}/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label>Phone</label>
                                 <input className="form-control" name="phone"
                                 value={this.state.phone} onChange={this.handleChange}/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label>Address</label>
                                 <input className="form-control" name="address"
                                 value={this.state.address} onChange={this.handleChange}/>
                             </div>
                        </div>
                       
                       
                    </form>
                </div>
            </div>
         </div>
        )
        
    
}
}

export default PlaceOrder;
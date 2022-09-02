import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './Footer';
import Home from './componenet/Home/Home';
import Listing from './componenet/listing/listingApi';
import Details from './componenet/details/restDetails';
import PlaceOrder from './componenet/booking/placeOrder';
import ViewBooking from './componenet/booking/viewOrder';
import Login from './componenet/login/login';
import Register from './componenet/login/register';


const Routing = () => {
    return(
        <BrowserRouter>
            
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
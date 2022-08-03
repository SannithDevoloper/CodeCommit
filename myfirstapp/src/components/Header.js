
import React,{Fragment,Component} from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <Fragment>
                <header>  
                    <div className='logo'>ReactApp...!</div>
                        <center>
                   
                    <span className='text'>SerachBar</span>
                    <input type="text"/>
                </center>
                </header>
              
                <hr/>
                <hr/>
            </Fragment>
        )

    }
}
export default Header;




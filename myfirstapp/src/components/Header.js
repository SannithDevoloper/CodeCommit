<<<<<<< HEAD
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



=======
import React from 'react';

const Header = () => {
    return(
        <div>
            <center>
                <h1>Developer Funnel</h1>
            </center>
            <hr/>
        </div>
    )
}

>>>>>>> 91d626b46bcfe99b1bc157671fb34b3dcab23113
export default Header;
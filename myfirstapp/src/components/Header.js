
import React,{Fragment,Component} from 'react';
import './Header.css';
class Header extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        // title: "ReactApp...! ",
         keyword:"SearchBar",

      }
    }
    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'SearchBar'});
        this.props.userInput(event.target.value)

    }
    
    render(){
        return(
            <Fragment>
                <header>
                    
                    <div className='logo'>
                        <img src="https://i.ibb.co/9HLvXf0/logo2.jpg" alt="logo" />
                    </div>
                        <center>
                        <div className='text'>{this.state.keyword}</div> 
                        <input type="text" onChange={this.handleChange} style={{width:'80%',height:'40px'}}/>
                       
                  
                </center>
                </header>
              
                <hr/>
                
            </Fragment>
        )

    }
}
export default Header;




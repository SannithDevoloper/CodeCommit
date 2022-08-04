
import React,{Fragment,Component} from 'react';
import './Header.css';
class Header extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         title: "ReactApp...! ",
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
                    <div className='logo'>{this.state.title}</div>
                        <center>
                        <input type="text" onChange={this.handleChange}/>
                    <div className='text'>{this.state.keyword}</div> 
                  
                </center>
                </header>
              
                <hr/>
                <hr/>
            </Fragment>
        )

    }
}
export default Header;




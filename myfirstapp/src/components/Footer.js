import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <div>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.year} {props.month}</h2>
            </center>
            
        </div>
    )
}

export default Footer;
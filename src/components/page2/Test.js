import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Test = (props) => {
    console.log(props);
    
    return(
        <div>
            <h3> Hi Text {props.match.params.postId} </h3>

            <Link to = '/'> Back To Home </Link>
        </div>
    );
}

export default Test;
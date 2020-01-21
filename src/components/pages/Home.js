import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
    return (
        <div>
            <h1>Home </h1>
            <Link to='/posts/post-1'> Post-1 </Link>
            <Link to='/posts/post-10'> Post-10 </Link>
            <Link to='/posts/post-75'> Post-75 </Link>
        </div>    
    )
}

export default Home;
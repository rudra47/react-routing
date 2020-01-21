import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
    }
    increase = () => {
        this.setState({
            count : this.state.count - 1
        });

        if (this.state.count <= 5) {
            this.setState({
                color: 'red'
            });
        }else{
            this.setState({
                color: 'black'
            });
        }

    }
    decrease = () => {
        this.setState({
            count : this.state.count + 1
        });
        if(this.count >= 15){
            this.setState({
                color: 'green'
            });
        }else{
            this.setState({
                color: 'black'
            });
        }
    }

    render(){
       return(
           <div>
                {/* <h1>
                    <span onClick={this.increase}> - </span> 
                    {this.state.count} 
                    <span onClick = {this.decrease}> + </span>
                </h1> */}
                <button className='btn btn-danger' onClick = {this.increase}> - </button>
                <span style={{fontSize : '150px', color: this.state.color }}>{this.state.count}</span>
                <button className='btn btn-success' onClick = {this.decrease}> + </button>
           </div>


        );
    }
}

export default Counter;
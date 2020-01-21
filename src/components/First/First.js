import React, { Component } from 'react'

class First extends Component{
    render(){
        return (
            <div className='container'>
                {/* <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h2> User Information</h2>
                    </div>
                    <div className='panel-body'>
                        <p>
                            Name = {this.props.name}
                        </p>
                        <p>
                            Address = {this.props.address}
                        </p>
                    </div>
                </div> */}
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h2> Book Information</h2>
                    </div>
                    <div className='panel-body'>
                        <p>
                            Name = {this.props.bookName}
                        </p>
                        <p>
                            Price = {this.props.price}
                        </p>
                    </div>
                </div>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h2> Product Information</h2>
                    </div>
                    <div className='panel-body'>
                        <p>
                            Name = {this.props.productName}
                        </p>
                        <p>
                            Price = {this.props.productPrice}
                        </p>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='col-md-6' style={{   fontSize: '30px' }}>
                        <h3>Lorem Ipsum</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur veniam accusantium vero repellat nemo eaque ipsa fuga cupiditate voluptate, dolor officia consequuntur odio deserunt hic quis vel possimus facere?
                    </div>
                    <div className='col-md-6'>
                        <h1>Lorem Ipsum</h1> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur veniam accusantium vero repellat nemo eaque ipsa fuga cupiditate voluptate, dolor officia consequuntur odio deserunt hic quis vel possimus facere?
                    </div>
                </div> */}
            </div>
        );
    }
}

export default First;
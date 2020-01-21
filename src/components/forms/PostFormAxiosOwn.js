import React, { Component } from "react";
import Axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class PostFormAxiosOwn extends Component {
    state = {  
        userId: '1001',
        title: '',
        body: '',
        isError: false,
        isSubmited: false
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();

        Axios.post(`${BASE_URL}/posts`,{
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
        })
            .then(response => {
                this.setState({
                    isSubmited: true,
                    isError: false
                });
                console.log(response);
            })
            .catch(error => {
                this.setState({
                    isError: true,
                    isSubmited: false
                })
            })
    }

    render() { 
        return (  
            <form onSubmit= {this.submitHandler}>
                <div className='form-group'>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Enter Your Title'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='form-group'>
                    <textarea 
                        className='form-control'
                        placeholder='Enter Your Body'
                        name='body'
                        value={this.state.body}
                        onChange={this.changeHandler}
                    />
                </div>

                <button type='submit' className='btn btn-danger'> Submit </button>

                { this.state.isSubmited && <p className='text-success'> Insert Successfully </p> }
            </form>
        );
    }
}
 
export default PostFormAxiosOwn;
import React from "react";
import Axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class PostFormAxios extends React.Component {
    state = { 
        title: '',
        body: '',
        userId: '112',
        isSubmited: false,
        isError: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();

        Axios.post(`${BASE_URL}/posts`, {
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        })
            .then(response => {
                this.setState({
                    isSubmited: true,
                    isError: false
                });
                console.log(response);
                // e.target.reset();
                
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
            <form onSubmit = {this.submitHandler}>
                <div className='form-group'>
                    <input 
                        type = "text"
                        className='form-control'
                        name='title'
                        value={this.state.title}
                        placeholder='Enter Your Title'
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className='form-group'>
                    <textarea 
                        className='form-control'
                        name='body'
                        value={this.state.body}
                        placeholder='Enter Your Body'
                        onChange = {this.changeHandler}
                    />
                </div>

                <button type='submit'  className='btn btn-success'> Submit </button>

                {this.state.isSubmited && <p className='text-success'> Insert Successfully </p>}
                {this.state.isError && <p className='text-danger'> Something is Wrong </p>}

            </form>
        );
    }
}
 
export default PostFormAxios;
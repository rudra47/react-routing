import React from 'react'

const initialState = {
    name: '',
    email: '',
    password: '',
    country: '',
    gender: '',
    bio: '',
    skills: []
}

class PostForm extends React.Component {

    constructor(){
        super();
        this.myForm = React.createRef();
    }

    state = {
        ...initialState
    }

    changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {   
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(e.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill != e.target.value)
                })
            }
        }else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    submitHandler = (e) => {
        e.preventDefault();
        
        console.log(this.state);

        this.myForm.current.reset();
        this.setState({
            ...initialState
        })
    }
    render() {
        return (
            <form ref={this.myForm} onSubmit={ this.submitHandler }>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="country">Country</label>
                    <select onChange={this.changeHandler} className='form-control' name='country' id='country' required>
                        <option> Select Country </option>
                        <option value='Bangladesh'> Bangladesh </option>
                        <option value='Australia'> Australia </option>
                        <option value='Germany'> Germany </option>
                        <option value='India'> India </option>
                        <option value='New-Zeeland'> New-Zeeland </option>
                    </select>
                </div>
                <div className='form-group'>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="male" 
                            value='Male' 
                            checked 
                            onChange={this.changeHandler}
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="female" 
                            value='Female'
                            onChange={this.changeHandler}
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="other" 
                            value='Other'
                            onChange={this.changeHandler}
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className="form-check">
                        <input 
                            type='checkbox'
                            className="form-check-input" 
                            name="Skills" 
                            id="javascript" 
                            value='Javascript'
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="javascript">Javascript</label>
                    </div>
                    <div className="form-check">
                        <input 
                            type='checkbox'
                            className="form-check-input" 
                            name="Skills" 
                            id="react" 
                            value='React Js'
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="react">React Js</label>
                    </div>
                    <div className="form-check">
                        <input 
                            type='checkbox'
                            className="form-check-input" 
                            name="Skills" 
                            id="jquery" 
                            value='Jquery'
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="jquery">Jquery</label>
                    </div>
                    <div className="form-check">
                        <input 
                            type='checkbox'
                            className="form-check-input" 
                            name="Skills" 
                            id="node-js" 
                            value='Node Js'
                            onChange={this.changeHandler}
                        />
                        <label htmlFor="node-js">Node Js</label>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="bio"
                        name='bio'
                        placeholder="Enter Bio"
                        value={this.state.bio}
                        onChange={this.changeHandler}
                        required
                    />
                </div>

                <button type='submit' className='btn btn-primary' > Submit </button>
            </form>
        )
    }
}

export default PostForm;
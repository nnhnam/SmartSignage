import React, { Component } from 'react'
import Banner from './AYY_Housing_banneri.png'

export class Domo extends Component {

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        console.log(this.state)
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <img className='img-fluid' src={Banner} alt='Banner' />
                    <div className='container-fluid p-3' style={{ backgroundColor: 'white', color: 'black' }}>
                        <h1>Talokierros Jämeräntaival 6</h1>
                        <p>Welcome to the monthly inspection round! When making the inspection round you should fill this form. Fill the form in the begin of each month, at the latest by the 6th day of the month. The idea is to check all the things mentioned in this form and report about the condition of the building. With this form AYY gets really important information so thank you for this important information. Have a good round!</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className='form-group'>
                                <label>Date</label>
                                <input onChange={this.handleChange.bind(this)} name='date' type='date' className="form-control" placeholder='Enter date' />
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input onChange={this.handleChange.bind(this)} name='name' type='text' className="form-control" placeholder='Enter name' />
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input onChange={this.handleChange.bind(this)} name='email' type='email' className="form-control" placeholder='Enter email' />
                            </div>
                            <div className='form-group'>
                                <label>Issues</label>
                                <textarea onChange={this.handleChange.bind(this)} name='issues' className="form-control" placeholder='Enter issues' rows='3' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Domo

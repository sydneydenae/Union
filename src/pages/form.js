// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {form, intro, heading, formBlocks, inputBox, submitButton, radioButtons, individualRadio} from '../components/layout.module.css'


// Step 2: Define your component
export default class FormPage extends React.Component{
    state = {
        firstName: "",
        lastName: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Thank you ${this.state.firstName} ${this.state.lastName} for submitting!`)
    }
      
    render () {
    return (
        <Layout pageTitle="Form">
        <div className={intro}>
        <h2 className={heading}>Get started today!</h2>
        Enter your information to recieve pricing information and further details regarding 
        your trading journey. Our team will contact you as soon as possible. </div>
        <form onSubmit={this.handleSubmit} className={form}>
            <label className={formBlocks}>
            First Name:&nbsp;
            <input className={inputBox}
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Last Name:&nbsp;
            <input className={inputBox}
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            E-mail:&nbsp;
            <input className={inputBox}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Phone:&nbsp;
            <input className={inputBox}
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
            />
            </label>
            <br/>

            <div class={radioButtons}>
            <p>Available capital: </p>
            <br/>
            <input type="radio" id="option0" name="money" value="0"/>
            <label className={individualRadio} for="option0">Below $10,000</label><br/>
            <br/>
            <input type="radio" id="option1" name="money" value="10,000"/>
            <label className={individualRadio} for="option1">$10,000-$50,000</label><br/>
            <br/>
            <input type="radio" id="option2" name="money" value="50,000"/>
            <label className={individualRadio} for="option2">$50,000-$150,000</label><br/>  
            <br/>
            <input type="radio" id="option3" name="money" value="150,000"/>
            <label className={individualRadio} for="option3">Above $150,000</label><br/>
            </div>
            
            <button type="submit" className={submitButton} >Submit</button>
        </form>
        </Layout>
    )
    }
}
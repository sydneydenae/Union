// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {form, intro, heading, formBlocks, inputBox, submitButton} from '../components/layout.module.css'


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
        alert(`Thank you for submitting the ${this.state.eventName} in ${this.state.location}!`)
        const eventName = this.state.eventName;
        const date = this.state.date
        const startTime = this.state.startTime
        const endTime = this.state.endTime
        const location = this.state.location
        const description = this.state.description
        const contact = this.state.contact
        alert(eventName)
        alert(date)
        alert(startTime)
        alert(endTime)
        alert(location)
        alert(description)
        alert(contact)
    }
      
    render () {
    return (
        <Layout pageTitle="Form">
        <div className={intro}>
        <h2 className={heading}>Enter an event!</h2>
        Enter for the information for an upcoming DC event you know about that is not currently on the events calendar!</div>
        <form onSubmit={this.handleSubmit} className={form}>
            <label className={formBlocks}>
            Event Name:&nbsp;
            <input className={inputBox}
                type="text"
                name="eventName"
                value={this.state.eventName}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Event Date(MM/DD/YYYY):&nbsp;
            <input className={inputBox}
                type="text"
                name="date"
                value={this.state.date}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Start Time:&nbsp;
            <input className={inputBox}
                type="text"
                name="startTime"
                value={this.state.startTime}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            End Time:&nbsp;
            <input className={inputBox}
                type="text"
                name="endTime"
                value={this.state.endTime}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Event Location:&nbsp;
            <input className={inputBox}
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Description:&nbsp;
            <input className={inputBox}
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Contact #:&nbsp;
            <input className={inputBox}
                type="text"
                name="contact"
                value={this.state.contact}
                onChange={this.handleInputChange}
            />
            </label>
            <br/>
            
            <button type="submit" className={submitButton} >Submit</button>
        </form>
        </Layout>
    )
    }
}

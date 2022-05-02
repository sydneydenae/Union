// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {intro, heading, mainContent2} from '../components/layout.module.css'
import ReactPlayer from 'react-player'

// Step 2: Define your component
const EventPage = () => {
  return (
    <Layout pageTitle="Demo Page">
      <div className={intro}>
      <h2 className={heading}>DC Union</h2>
        <p>Click the video to see how DC Union App would take in multiple events and display them as a list!</p>
      </div>
      <div className={mainContent2}>
        <ReactPlayer url="https://vimeo.com/705500732/969c38f9e5"/>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default EventPage

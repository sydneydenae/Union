// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {intro, heading, mainContent} from '../components/layout.module.css'
import FormPage from './form'


// Step 2: Define your component
const EventPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={intro}>
      <h2 className={heading}>DC Union</h2>
        <p>Scroll to view all of the current events going on around DC and even add your own!</p>
      </div>
      <div className={mainContent}>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default EventPage

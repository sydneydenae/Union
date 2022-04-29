// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {intro, heading, mainContent} from '../components/layout.module.css'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={intro}>
      <h2 className={heading}>DC Union</h2>
        View all of the current events going on around DC and even add your own!
        <Link to="/form"><br/>Click here to input an upcoming event</Link>
        </div>
      <div className={mainContent}>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

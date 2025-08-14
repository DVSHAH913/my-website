import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Next from '../components/next'
import './getting-started.css'

const GettingStarted = (props) => {
  return (
    <div className="getting-started-container1">
      <Helmet>
        <title>Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Intro to teleportHQ" />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/04e27289-f9fd-464d-918f-a81b3088765e/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="getting-started-container2">
        <Heading heading1="Welcome to teleportHQ!"></Heading>
        <div className="getting-started-ul">
          <ListItem></ListItem>
          <ListItem text="Your progress is saved automatically"></ListItem>
          <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
        </div>
        <div className="getting-started-footer">
          <span className="getting-started-text Subheading">
            Let&apos;s do this!
          </span>
          <Next
            text="Hit Ctrl/Cmd + Arrow Down for the next step"
            rootClassName="nextroot-class-name"
          ></Next>
        </div>
      </div>
      <div className="getting-started-container3">
        <div className="getting-started-container4">
          <div className="getting-started-container5"></div>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted

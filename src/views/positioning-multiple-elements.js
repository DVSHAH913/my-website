import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './positioning-multiple-elements.css'

const PositioningMultipleElements = (props) => {
  return (
    <div className="positioning-multiple-elements-container1">
      <Helmet>
        <title>Positioning-Multiple-Elements - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Positioning-Multiple-Elements - Intro to teleportHQ"
        />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/04e27289-f9fd-464d-918f-a81b3088765e/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="positioning-multiple-elements-container2">
        <div className="positioning-multiple-elements-container3">
          <Heading text=" " heading1="Positioning Multiple Elements"></Heading>
          <h2 className="positioning-multiple-elements-text1 Subheading">
            Desired Outcome
          </h2>
          <div className="positioning-multiple-elements-container4">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/img/default.png"
              className="positioning-multiple-elements-image"
            />
            <div className="positioning-multiple-elements-container5">
              <h1>Heading</h1>
              <span>Text</span>
            </div>
          </div>
          <div className="positioning-multiple-elements-ul1">
            <ListItem text="Add an Image (I) in the container below"></ListItem>
            <ListItem text="Drag and drop a Heading (H) next to the image"></ListItem>
            <ListItem text="Drag and drop a Text (T) element below the Heading"></ListItem>
            <ListItem text="See what happens!"></ListItem>
          </div>
          <h2 className="positioning-multiple-elements-text4 Subheading">
            Give it a try
          </h2>
          <div className="positioning-multiple-elements-container6"></div>
          <div className="positioning-multiple-elements-ul2">
            <ListItem text="We automatically group elements in containers when needed"></ListItem>
            <div className="positioning-multiple-elements-container7">
              <ListItem text="Check the Tree View to get a better overview of your page's structure"></ListItem>
            </div>
            <Tip text="Open the Files &amp; Tree View panel by pressing Ctrl/Cmd + 3"></Tip>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default PositioningMultipleElements

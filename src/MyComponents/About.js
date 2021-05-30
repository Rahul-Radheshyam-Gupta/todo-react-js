import React from 'react'
import PropTypes from 'prop-types'

function About(props) {
    const aboutStyle ={
        minHeight:"70vh",
        marginTop: "5%"
    }
    return (
        <div className="text-center" style={aboutStyle}>
           
            <h2>About Todo App</h2>
            <p>
            Here I created this todo app using React JS.
            </p>
            
        </div>
    )
}



export default About


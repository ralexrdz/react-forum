import React from 'react'

import { Link, Route } from "react-router-dom";

function Us (props) {
  console.log(props)
  return <div>
    Us
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque rem placeat nam accusantium sunt ipsum nisi voluptatum, incidunt repellat quae?</p>
  </div>
}
function Story (props) {
  console.log(props)
  return <div>
    Story
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, placeat eius voluptatem quisquam fuga aliquam! Voluptas saepe eos nemo dolorum rerum quae!</p>
  </div>
}

function About (props) {
  console.log(props)
  return <div>
    About
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde eos, mollitia quae ipsa totam dolorum repellendus quod nobis, adipisci maxime qui omnis repellat facere aut? Temporibus odio vitae praesentium?</p>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Link to="/about/us">Us</Link>
      <Link to="/about/story">Story</Link>
    </div>
    <Route path={props.match.url + "/us"} component={Us}/>
    <Route path={props.match.url + "/story"} component={Story}/>
  </div>

}export default About
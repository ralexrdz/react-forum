import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TengoONoMensajes from "./components/TengoONoMensajes";
// import ConOSinSubtitulo from "./components/ConOSinSubtitulo";
// import SmartDump from "./components/SmartDump/SmartDump";
import PostList from './components/PostList.jsx'

import { Switch, Route, Link } from "react-router-dom";

function Home (props) {
  console.log(props)
  return <div>
    HOME
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
}
function Contacts (props) {
  console.log(props)
  return <div>
    Contacts
  </div>
}
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
function Header (props) {
  return <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contacts">Contacts</Link>
  </div>
}


function App(props) {

  console.log('App.props', props)
  let dummyPosts = [
    {
      text: 'Parrafo Post 1',
          comments: ['Hola', 'Adios']
      },
      {
        text: 'Parrafo Post 2',
        comments: ['Ayiura', 'Nah']
      }
    ]
  return (
    <div className="App">
      {/* <TengoONoMensajes />
      <ConOSinSubtitulo titulo="Hola" subtitulo="Adios" muestraSubtitulo/>
      <SmartDump algo="hola"/> */}
      {/* <PostList posts={dummyPosts}/> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
      <div>Footer</div>
    </div>
  );
}

export default App;

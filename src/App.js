import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TengoONoMensajes from "./components/TengoONoMensajes";
// import ConOSinSubtitulo from "./components/ConOSinSubtitulo";
// import SmartDump from "./components/SmartDump/SmartDump";
import PostList from './components/PostList.jsx'

import { Switch, Route, Link } from "react-router-dom";

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import TengoONoMensajes from './components/TengoONoMensajes';

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
      {/* <PostList /> */}

      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        {/* 
          Si quiero mandarle atributos en el componente 
          No uso component={MiComponente}
          En vez, uso render={() => <MiComponente atributo={parametro} />}
        */}
        <Route 
          path="/posts" 
          render={
            () => {
            return <div className="Estilado">
              <PostList posts={dummyPosts}/>
              <TengoONoMensajes />
            </div>
            }
          } />
      </Switch>
      <div>Footer</div>
    </div>
  );
}

export default App;

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
import RouteParams from './components/RouteParams';
import PostDetails from './components/PostDetail';

import dummyPosts from './dummyData/dummyPosts'

class App extends React.Component {

  constructor (props) {
    super(props)

    console.log(dummyPosts) 

    this.state = {
      posts: dummyPosts
    }
  }

  addPost = () => {
    let newPost = {
      id: this.state.posts[ this.state.posts.length-1 ].id + 1,
      text: this.state.newPostText,
      comments: []
    }
    this.setState({
      posts: [...this.state.posts, newPost],
      newPostText: ''
    })
  }

  updateNewPostText = (e) => {
    console.log(e.target.value)
    this.setState({
      newPostText: e.target.value
    })
  }

  addComment = (postId) => {
    console.log('addComment')
    let newComment = this.state.newCommentText
    
    console.log('addComment',newComment, postId)

    let posts = [...this.state.posts]
    posts.find(p => p.id == postId).comments.push(newComment)

    console.log(this.state.posts)
    this.setState({
      posts,
      newCommentText: ''
    })
  }

  updateNewCommentText = (e) => {
    console.log(e.target.value)
    this.setState({
      newCommentText: e.target.value
    })
  }

  render () {
    console.log('App.props', this.props)
  
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
          <Route path="/params/:palabra" component={RouteParams}/>
          {/* 
            Si quiero mandarle atributos en el componente 
            No uso component={MiComponente}
            En vez, uso render={() => <MiComponente atributo={parametro} />}
          */}
          <Route 
            exact
            path="/posts" 
            render={
              () => {
              return <div className="Estilado">
                <PostList 
                  posts={this.state.posts} 
                  newText={this.state.newPostText} 
                  handleAddPost={this.addPost}
                  handleUpdateNewPostText={this.updateNewPostText}
                />
                <TengoONoMensajes />
              </div>
              }
            } />
          <Route 
            path="/posts/:id" 
            render={
              (routeProps) => {
              return <PostDetails 
                posts={this.state.posts}
                newText={this.state.newCommentText} 
                handleAddComment={this.addComment}
                handleUpdateNewCommentText={this.updateNewCommentText}
                {...routeProps}
              />
              }
            } />
        </Switch>
        <div>Footer</div>
      </div>
    );
  }
}

export default App;

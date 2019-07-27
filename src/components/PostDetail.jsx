import React from 'react'

import { Link, Redirect } from "react-router-dom";

class PostDetails extends React.Component {
  
  constructor (props) {
    super(props)
    console.log('contrsPostDetail', props)

    let posts = props.posts

    let id = props.match.params.id
    
    console.log('posts', posts)
    console.log('id', id)

    let myPost = posts.find(p => p.id == id )

    console.log('myPost', myPost)
    
    this.state = {
      text: myPost.text,
      comments: myPost.comments,
      newText: '',
      redirect: false
    }
  }

  componentDidUpdate (oldProps, oldState) {
    // aqui seguimos el proximo
    
  }

  prepareDelete = () => {

    this.props.handleDeletePost(this.props.match.params.id)
    this.setState({
      redirect: true
    })
  }

  render () {

    if (this.state.redirect) return <Redirect to="/posts"/>
    let id = this.props.match.params.id
    console.log('PostDetailstate.props', this.props)
    let comments = this..comments.map((c, index) => {
      return <div style={{border: '1px solid blue'}}>
        {c}
        <button onClick={() => this.props.handleDeleteComment(index, id)}>X</button>
      </div>
    })
    return <div style={{border: '1px solid red'}}>
      <Link to="/posts">Regresar</Link>
      <div>
        {this.state.text}

      </div>
      <div>
        <button onClick={this.prepareDelete}>Borrar Post</button>
      </div>
      <div>
        <textarea onChange={this.props.handleUpdateNewCommentText} value={this.props.newText}></textarea>
        <div><button onClick={() => this.props.handleAddComment(id)}>Comentar</button></div>
      </div>
      <div>
        {
          comments
        }
      </div>
    </div>
  } 
}

export default PostDetails
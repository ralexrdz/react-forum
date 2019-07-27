import React from 'react'

import { Link } from "react-router-dom";

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
      newText: ''
    }
  }

  render () {
    let id = this.props.match.params.id
    console.log('PostDetail.props', this.props)
    let comments = this.state.comments.map(c => <div style={{border: '1px solid blue'}}>{c}</div>)
    return <div style={{border: '1px solid red'}}>
      <Link to="/posts">Regresar</Link>
      <div>
        {this.state.text}

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
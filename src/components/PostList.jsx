import React from 'react'
import Post from './Post.jsx'

function PostList (props) {
    console.log('asdasd');
    
    let posts = props.posts.map(p => 
      <Post 
        text={p.text} 
        comments={p.comments} 
        id={p.id} 
        handleDeletePost={props.handleDeletePost}
      />
    )
    return <div>
      <h1>PostList</h1>
      <textarea onChange={props.handleUpdateNewPostText} value={props.newText}></textarea>
      <div><button onClick={props.handleAddPost}>Agregar Post</button></div>
      {
        posts
      }
    </div>
}

export default PostList
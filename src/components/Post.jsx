import React from 'react'

let Post = (props) => {

  let comments = props.comments.map(c => <div>{c}</div>)
  return <div>
    <div>
      {props.text}

    </div>
    <div>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <div><button>Comentar</button></div>
    </div>
    <div>
      {
        comments
      }
    </div>
  </div>
}

export default Post
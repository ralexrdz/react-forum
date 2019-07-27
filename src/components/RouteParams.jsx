import React from 'react'

function RouteParams (props) {
  console.log('RouteParams', props)
  return <div>
    RouteParams, {props.match.params.palabra}
  </div>

}export default RouteParams
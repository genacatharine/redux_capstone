import React, { Component } from 'react'
import { connect } from 'react-redux'

class HikeList extends Component {
  renderList(){
    return this.props.hikes.map((hike)=>{
      return(
        <li key={hike.name}>{hike.name}</li>
      )
    })
  }
  render (){
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
    hikes: state.hikes
  }
}

export default connect(mapStateToProps)(HikeList)

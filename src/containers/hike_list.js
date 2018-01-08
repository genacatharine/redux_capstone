import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitAddress } from '../actions/index'
import { bindActionCreators } from 'redux'


class HikeList extends Component {
  renderList(){
    return this.props.hikes.map((hike)=>{
      return(
        <li
          onClick={()=> this.props.submitAddress(hike)}
          key={hike.name}>
          {hike.name}
        </li>
      )
    })
  }
  render (){
    return (
      <div>
      {/* <input type="submit"></input> */}
      <ul>
        {this.renderList()}
      </ul>
    </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    hikes: state.hikes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ submitAddress: submitAddress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeList)

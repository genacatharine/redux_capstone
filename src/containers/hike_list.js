import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap'
import './hike_list.css'

class HikeList extends Component {
  render () {
    return this.props.hikes.length > 0
      ? <ul>{this.props.hikes[0].data.map(x => <li key={x.id}>{x.name}</li>)}</ul>
      : <p>Enter a location</p>
  }
}

/*
if (...) {
   return ...
}
else {
  ...
}
*/

export default connect(({ hikes }) => ({hikes: hikes}))(HikeList)

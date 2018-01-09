import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap'

class HikeList extends Component {
  render () {
    return this.props.hikes.length > 0
      ? <ul>{this.props.hikes[0].data.map(x => <li key={x.id}>{x.name}</li>)}</ul>
      : <p>Enter a location</p>
    }
}

export default connect(({ hikes }) => ({hikes: hikes}))(HikeList)

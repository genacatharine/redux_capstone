import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap'
import './hike_list.css'

class HikeList extends Component {
  render () {
    if (this.props.hikes.length > 0) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Hike Name</th>
              <th>Distance(meters)</th>
              <th>Location</th>
              <th>Add to List</th>
            </tr>
          </thead>
          <tbody>
            {this.props.hikes[0].data.map(x => <td key={x.id}>{x.name}</td>)}
          </tbody>
        </table>

    )}
    else {
      return <p>Enter a location</p>
    }
    // return this.props.hikes.length > 0
    //   ? <ul>{this.props.hikes[0].data.map(x => <li key={x.id}>{x.name}</li>)}</ul>
    //   : <p>Enter a location</p>
  }
}

export default connect(({ hikes }) => ({hikes: hikes}))(HikeList)

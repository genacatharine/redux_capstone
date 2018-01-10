import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap'
import './hike_list.css'

class HikeList extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    console.log(Object.keys(this.props.hikes.hikes))
    let hikes = []
    for (let key in this.props.hikes.hikes) {
      let hike = this.props.hikes.hikes[key]
      hikes.push(hike)
    }
    console.log(hikes.length)
    if (hikes.length > 0) {
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
            {hikes.map(x => <td key={x.id}>{x.name}</td>)}
          </tbody>
        </table>

    )}
    else {
      return <p>The Hike Search Engine For the Token Coloradoan</p>
    }
    // return this.props.hikes.length > 0
    //   ? <ul>{this.props.hikes[0].data.map(x => <li key={x.id}>{x.name}</li>)}</ul>
    //   : <p>Enter a location</p>
  }
}

const mapStateToProps = (state, { messageId }) => {
  const hikes = state.hikes
  return {
    hikes
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HikeList);

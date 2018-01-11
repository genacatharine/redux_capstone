import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Button } from 'react-bootstrap'
import './hike_list.css'

class HikeList extends Component {
  render () {
    console.log(Object.keys(this.props.hikes.hikes))
    let hikes = []
    for (let key in this.props.hikes.hikes) {
      let hike = this.props.hikes.hikes[key]
      let trailLocation = hike.geometry.coordinates.reverse()
      hikes.push(hike)
      // console.log(hikes)
    }
    if (hikes.length > 0) {
      return (
        <div className="resultslistcontainer">
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Hike Name</th>
              <th>Distance(meters)</th>
              <th>Location</th>
              <th>Add to To-Hike List</th>
            </tr>
          </thead>
          <tbody>
            {hikes.map(x =>
              <tr><td data-hike-id="hikename" key={x.id}>{x.name}</td>
              <td>{x.distance_in_meters}</td>
              <td><a href="http://maps.google.com/?q=${x.geometry.coordinates.reverse()}" target="_blank">Link to Map</a></td>
              <td><a href="#" class="addToHikeList" data-hike-id={x.id}>Add to To-Hike List</a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    )}
    else {
      return <div className="h3container"><h3>Create a hiking diary!<br /> Find hiking trails, add them to your To-Hike list, <br /> upload photos and blog about them!</h3></div>
    }
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

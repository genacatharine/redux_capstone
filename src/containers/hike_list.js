import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addHike} from '../actions/index'
import './hike_list.css'
import { toast, ToastContainer } from 'react-toastify';
import { css } from 'glamor';

class HikeList extends Component {

  constructor(props) {
    super(props);
    console.log('loaded');
    this.state = {
      addedhikes:[]
    }

    this.onHikeClick = this.onHikeClick.bind(this)
  }
  onHikeClick(event) {
    // event.preventDefault();
    var clientToken = localStorage.getItem('token');
    function parseJwt (token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            };
    clientToken = parseJwt(clientToken)
    clientToken = clientToken.userId

    var hikeid = document.getElementById('hikename');
    hikeid=hikeid.innerText
    console.log('HIKEEEEIDDDDDD', hikeid)

    this.props.addHike(this.state.addedhikes, clientToken, hikeid)
    this.setState({addedhikes: ''})

  }

  notify = () => {
  toast.info("Hike Added! Cowabunga!", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "black"
      })
    });
}
  render () {
    // console.log(Object.keys(this.props.hikes.hikes))
    let hikes = []
    for (let key in this.props.hikes.hikes) {
      let hike = this.props.hikes.hikes[key]
      hikes.push(hike)
      // console.log(hikes)
    }
    if (hikes.length > 0) {
      return (
        <div className="resultslistcontainer">
          <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
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
              <tr key={x.id}>
                <td id="hikename">{x.name}</td>
                <td>{x.distance_in_meters}</td>
                <td><a href={"http://maps.google.com/?q="+ ((x.geometry.coordinates).reverse())} target="_blank">Link to Map</a></td>
                <td>
                  <a onClick={ (e) => {this.notify(); this.onHikeClick()}} href="#" class="addToHikeList" data-hike-id={x.id} data-hike-name={x.name}>Add to Hike List</a></td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer />
      </div>

    )}
    else {
      return <div className="h3container"><h3>Create a hiking diary!<br /> Find hiking trails, add them to your Hike list, <br /> upload photos and blog about them!</h3></div>
    }
  }
}

const mapStateToProps = (state, { messageId }) => {
  const hikes = state.hikes
  return {
    hikes,
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
addHike
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HikeList);

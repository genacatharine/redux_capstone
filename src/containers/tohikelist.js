import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {seeHikes} from '../actions'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


class toHikeList extends Component {

  componentWillMount=()=> {

//     function parseJwt (x) {
//           var base64Url = clientToken.split('.')[1];
//           var base64 = base64Url.replace('-', '+').replace('_', '/');
//           return JSON.parse(window.atob(base64));
//       };
// clientToken = parseJwt(clientToken)
// console.log('clientttttokenenenennenenen', clientToken.userId);

    const clientToken = localStorage.getItem('token');

    console.log('clientToken', clientToken);

    this.props.seeHikes(clientToken)
  }

  // uploadWidget() {
  //   window.cloudinary.openUploadWidget({
  //     cloud_name: 'db77jltpp',
  //     upload_preset: 'bqq0uexy',
  //     tags: ['xmas']
  //   }, function(error, result) {
  //     console.log(result);
  //   });
  // }

  render() {
    const hikes = this.props.myhikes;

    if (hikes.length === 0) return <p>Loading...</p>

    return (
      <div className="tohikelistcontainer">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
        <Header/>
        <h1>My Hike List</h1>
        <div className="upload">
          <ListGroup>
          {hikes.map((hike) => {
            // console.log(hike);
            return (

            <ListGroupItem className="itemli" key={hike.id}>{hike.hike_name}<br /><button>Delete</button>
          </ListGroupItem>
          )}
          )}
        </ListGroup>
        </div>
      </div>

    )
  }
}

const mapStateToProps= (state) => {
  return { auth: state.auth,
          myhikes: state.myhikes
            }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  seeHikes
}, dispatch)

export default connect(mapStateToProps,
  mapDispatchToProps
)(toHikeList)

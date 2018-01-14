import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {seeHikes} from '../actions'

class toHikeList extends Component {

  componentWillMount=()=> {
    var clientToken = localStorage.getItem('token');

    function parseJwt (x) {
          var base64Url = clientToken.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          return JSON.parse(window.atob(base64));
      };
clientToken = parseJwt(clientToken)
console.log('clientttttokenenenennenenen', clientToken.userId);

    this.props.seeHikes(clientToken.userId)
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
    let hikes = this.props
              console.log('HIKESPROPSSSSSSS', hikes)
    return (
      <div className="tohikelistcontainer">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
        <Header/>
        <h1>My Hike List</h1>

        {/* <div className="upload"> */}
          <ol>

          {/* <li>Betasso Link Access</li> */}
          {/* <br/> */}
          {/* <input className="blog" placeholder="Type Here"></input>
          <button>Add Blog</button> */}
          {/* <br/>
          <br/> */}
          {/* <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button> */}
          {/* <br />
          <button>Delete Hike</button> */}
          </ol>
        {/* </div> */}
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

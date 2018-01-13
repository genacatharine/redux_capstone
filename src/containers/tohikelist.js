import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'
import {connect} from 'react-redux';

class toHikeList extends Component {

  uploadWidget() {
    window.cloudinary.openUploadWidget({
      cloud_name: 'db77jltpp',
      upload_preset: 'bqq0uexy',
      tags: ['xmas']
    }, function(error, result) {
      console.log(result);
    });
  }

  render() {
    return (
      <div className="tohikelistcontainer">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
        <Header/>
        <h1>My Hike List</h1>

        <div className="upload">
          <ol>
            <li>Betasso Link Access</li>

          {/* <br/> */}
          {/* <input className="blog" placeholder="Type Here"></input>
          <button>Add Blog</button> */}
          {/* <br/>
          <br/> */}
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
          <br />
          <button>Delete Hike</button>
          </ol>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, null)(toHikeList)

import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'

class toHikeList extends Component {
  uploadWidget() {
    cloudinary.openUploadWidget({
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
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></link>
        <Header/>
        <h1>My Hike List</h1>
        <ul></ul>
        <div className="upload">
          <br/>
          <input placeholder="Type Blog Post Here"></input>
          <button>Add Blog</button>
          <br/>
          <br/>
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div>

      </div>

    )
  }
}

export default toHikeList

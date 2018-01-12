import React, { Component } from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

class toHikeList extends Component {
  uploadWidget() {
        cloudinary.openUploadWidget({ cloud_name: 'db77jltpp', upload_preset: 'bqq0uexy', tags:['xmas']},
            function(error, result) {
                console.log(result);
            });
    }


  render() {
    return (
      <div className="tohikelistcontainer">
        <Header />
        <h1>My To-Hike List</h1>
        <div className="upload">
            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                Add Image
            </button>
            <button>Add Blog</button>
          </div>

      </div>

    )
  }
}



export default toHikeList

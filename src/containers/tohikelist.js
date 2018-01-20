import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
// import {seeHikes} from '../actions'
import { addImage, loginUser, seeHikes } from '../actions'
import {ListGroup, ListGroupItem, NavItem, Navbar, Nav} from 'react-bootstrap'

class toHikeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedimages: []
    }
  }

  componentWillMount = () => {
    const clientToken = localStorage.getItem('token');
    this.props.seeHikes(clientToken)
  }

  uploadWidget = (id, hike_name, hike_id) => {
    const clientToken = localStorage.getItem('token');
    window.cloudinary.openUploadWidget({
      cloud_name: 'db77jltpp',
      upload_preset: 'bqq0uexy', multiple: 'false', resource_type: 'image'
    }, (error, result) => {
      console.log('result!!!', result);
          // const thumbnailUrl = result[0].thumbnail_url
          const thumbnailUrl= result[0].secure_url
          console.log('THUMB', thumbnailUrl);
          this.props.addImage(thumbnailUrl, clientToken, id, hike_name, hike_id)
    });
  }

  render() {
    const hikes = this.props.myhikes;

    if (hikes.length === 0)
      return <p>Please add a hike to see your hike list!</p>

    return (
      <div className="tohikelistcontainer">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
         {/* <Header/> */}
         <div className="navbar-container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Brand>
              <a href="/" className="home">My Hiking Journal</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
              <Nav pullRight>
                {/* <NavItem href="/register">{props.auth ? '' : 'Register'}</NavItem> */}
                <NavItem href="/tohikelist">My Hike List</NavItem>
                <NavItem href="/login">Log Out</NavItem>
              </Nav>
          </Navbar.Collapse>
         </Navbar>
        </div>
        <h1>My Hike List</h1>
        <div className="upload">
          <ListGroup>
            {hikes.map((hike) => {
              return (
                <ListGroupItem className="itemli" key={hike.hike_id}>{hike.hike_name}
                  <br/>
                <img className="img-rounded thumbimg" src={hike.img_thumbnail}></img>
                <br />
                  <button onClick={(e) => this.uploadWidget(hike.id, hike.hike_name, hike.hike_id, hike.img_thumbnail)}
                    className="upload-button">Add Image</button>
                  {/* <button onClick={() => this.onDelete(hike.id, hike.hike_name, hike.hike_id, hike.img_thumbnail)}>Delete Hike</button> */}
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth, myhikes: state.myhikes, addedimages: state.addedimages, remaining: state.remaining}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  seeHikes,
  addImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(toHikeList)

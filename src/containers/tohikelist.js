import React, {Component} from 'react'
import Header from './header'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import './tohikelist.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {seeHikes} from '../actions'
import {deleteHike} from '../actions'
import {ListGroup, ListGroupItem, NavItem, Navbar, Nav} from 'react-bootstrap'

class toHikeList extends Component {

  componentWillMount = () => {
    const clientToken = localStorage.getItem('token');
    // console.log('clientToken', clientToken);
    this.props.seeHikes(clientToken)
    // this.props.deleteHike(hikeid)
    // this.props.addImage()
  }

  onDelete(id, hike_name) {
    console.log('DELETE BUTTON CLICK');
    console.log('HIKE IN DELETE', id)
    // event.preventDefault();
    // this.props.deleteHike(this.state.addedhikes, clientToken, id, name)
    // var clientToken = localStorage.getItem('token');
    this.props.deleteHike(id, hike_name)
  };

  uploadWidget(id, hike_name, image) {
    window.cloudinary.openUploadWidget({
      cloud_name: 'db77jltpp',
      upload_preset: 'bqq0uexy',
      tags: ['xmas']
    }, function(error, result) {
      let image = result[0].thumbnail_url
      console.log(image);
      this.props.addImage(image)
    });
  }

  render() {
    console.log('THISPROPS', this.props)
    const hikes = this.props.myhikes;

    if (hikes.length === 0)
      return <p>Loading...</p>

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
              // console.log(hike);
              return (
                <ListGroupItem className="itemli" key={hike.id}>{hike.hike_name}<br/>
                  <button onClick={this.uploadWidget.bind(this)} className="upload-button">Add Image</button>
                  <button onClick={(e) => {
                    this.onDelete(hike.id, hike.hike_name)
                  }}>Delete</button>
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
  // deleteHike,
  // addImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(toHikeList)

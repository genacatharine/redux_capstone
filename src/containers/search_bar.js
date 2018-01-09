import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchHikes} from '../actions/index'
import {FormControl, Button} from 'react-bootstrap'
import './search_bar.css'
import Header from './header.js'
import HikeList from './hike_list.js'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchHikes(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></link>
        <div className="homepage-container">
          <div className="homepage-img-container">
            <Header />
        <h1>
          MY HIKING JOURNAL
        </h1>
        <h5>
          Create your very own hiking diary! Find hiking trails, add them to your To-Hike list, upload photos and blog about them!
        </h5>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <FormControl placeholder="Enter your location here" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <Button type="submit" className="btn btn-secondary">Submit</Button>
          </span>
        </form>
        <HikeList />
      </div>
    </div>
  </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchHikes
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

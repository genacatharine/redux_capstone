import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHikes } from '../actions/index'
import { FormControl, Button } from 'react-bootstrap'


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state= { term: ''}

    this.onInputChange= this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchHikes(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <FormControl
          placeholder="Enter your location here"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <Button type="submit" className="btn btn-secondary">Submit</Button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHikes }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

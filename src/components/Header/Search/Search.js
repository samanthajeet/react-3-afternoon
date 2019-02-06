import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';





//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {

  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      userInput: value
    })
  }



  render() {
    return (

      <section className="Search__parent">

        <div className="Search__content">
          <input  onChange={(e) => this.handleChange(e.target.value)} placeholder="Search Your Feed" value={this.userInput} />

          <SearchIcon onClick={ () => this.props.searchPostFn(this.state.userInput) } id="Search__icon" />
        </div>
        
      </section>
    )
  }
}
import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
          <input
            className="form-control form-control-sm mr-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.props.title}
            onChange={this.props.filterMovie}
          />
          <i className="fas fa-search" aria-hidden="true"></i>
        </form>
      </div>
    );
  }
}

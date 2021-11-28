import React, { Component } from "react";

export class Search extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="What are You want to search?"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Search;

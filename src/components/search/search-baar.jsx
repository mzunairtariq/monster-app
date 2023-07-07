import React from "react";
import "./search-baar.styles.css";

class SearchBaar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  render() {
    return (
      <div className="search-baar--container">
        <input
          className="inputStyles"
          type="text"
          placeholder="Search Here"
          onChange={(event) => {
            this.setState({ searchText: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default SearchBaar;

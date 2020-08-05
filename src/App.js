import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      users: [],
      loading: false
    };
    // bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get data:
  getUsers() {
    this.setState({
      loading: true // Set the 'loading' state = true before the data is loaded:
    });

    axios("https://api.randomuser.me/?nat=US&results=5").then(response =>
      this.setState({
        users: [...this.state.users, ...response.data.results], // Set the data for the 'users' state
        loading: false // Set the 'loading' state = false after the data is loaded
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log("more users loaded");
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        {/* Check the 'loading' state to show the loading or show the information: */}
        {loading ? (
          <Loading message="Loading. Please wait..." />
        ) : (
          users.map(user => (
            <div key={user.id.value}>
              <h3 style={{ marginBottom: "0" }}>{user.name.first}</h3>
              <div style={{ color: "gray" }}>Cellphone: {user.cell}</div>
            </div>
          ))
        )}

        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Load more users" />
        </form>
      </div>
    );
  }
}

export default App;

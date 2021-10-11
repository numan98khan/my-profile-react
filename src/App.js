import React from 'react';
import Header from './Header'
import './App.css';


export default class PersonList extends React.Component {
  state = {
    name: '',
    postName: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    // const user = {
    //   name: this.state.name
    // };

    // var bodyFormData = new FormData();
    // bodyFormData.append("name", this.state.name);

    var url = "https://backpoint.azurewebsites.net/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);

          const obj = JSON.parse(xhr.responseText);

          this.setState({ postName: obj.returned });

      }}.bind(this);

    var data = `{"name":"${this.state.name}"}`;

    xhr.send(data);
  }

  render() {
    return (
      <div className="container">
        <Header></Header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>

          <br/>
          <label>
            {this.state.postName}
          </label>
        </form>
      </div>
    )
  }
}
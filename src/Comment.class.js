import React, { Component } from "react";
import axios from 'axios';

class Commentclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      message:''
    }
  }
  componentDidMount() {
    document.title = "Comments";
    this.fetchData();
	//const id = window.location.href.split('/')[4];
	//alert(id);
  }
  fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        //if (res.data) {
        //  const { data } = res.data;
          this.setState({
            comments: res.data,
          });
        //}
      })
      .catch((error) => {
        this.setState({
          message: `No results found!`,
        });
      });
  };
  render() {
    return (
      <>
      <ul>
        {this.state.comments && this.state.comments.map(item => (
          <li key={item.id}>
            {item.email}
         </li>
       ))}
      </ul>
    </>
    );
  }
}
export default Commentclass;
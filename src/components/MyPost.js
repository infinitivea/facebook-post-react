import React, { Component } from "react";
import "./MyPost.css";

class MyPost extends Component {
  render() {
    const currentDate = new Date();
    // post-container style
    /* const postContainer = {
      width: "40%",
      margin: "5px auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid black",
    }; */
    // post-header style
    const postHeader = {
      display: "flex",
      justifyContent: "flex-start",
    };
    // post-content style
    const postContent = {
      margin: "5px 5px",
    };
    const imgStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingBottom: "1px",
    };
    const postButton = {
      margin: "5px 5px 0 0",
      cursor: "pointer",
    };
    const loremPicsum = "https://picsum.photos/";
    let imgSrc = loremPicsum + this.props.width + "/" + this.props.height;

    const imgIcon =
      "https://cdn.shopify.com/s/files/1/2057/9781/products/112519027192_700x700.jpg?v=1577707219";

    return (
      <div className="post-container">
        <div className="post-content" style={postContent}>
          <div className="post-header" style={postHeader}>
            <img src={imgIcon} style={{ width: "50px", height: "50px" }}></img>
            <div style={{ marginLeft: "5px" }}>
              <h3 style={{ margin: "0px" }}>{this.props.name}</h3>
              <h6>
                {currentDate.toDateString() +
                  ", " +
                  currentDate.toLocaleTimeString()}
              </h6>
            </div>
          </div>
          <hr />
          <div className="post-content">
            <p>{this.props.text}</p>
            <div style={imgStyle}>
              <img src={imgSrc} style={imgStyle}></img>
            </div>
          </div>
          <hr />
          <div className="post-button">
            <button style={postButton}>&#128077; Like</button>
            <button style={postButton}>&#128172; Comment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPost;

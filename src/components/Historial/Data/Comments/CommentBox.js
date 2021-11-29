import axios from "axios";
import React, { Component } from "react";
import user from "../../../../constants/user";
import DataPage from "../Data";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.css";

const DUMMY_DATA = [
  {
    comment_id: 6,
    user_id: 5,
    text: "Soy Jordan y estoy escribiendo un comentario.",
    createdAt: "2021-11-08 02:57:15.634",
    updatedAt: "2021-11-08 02:57:15.634",
    run_id: 1,
  },
  {
    comment_id: 5,
    user_id: 1,
    text: "Soys el sysadmin.",
    createdAt: "2021-11-08 02:57:15.634",
    updatedAt: "2021-11-08 02:57:15.634",
    run_id: 1,
  },
];

class CommentBox extends Component {
  addComment(body) {
    const comment = {
      user_id: user.data.user_id,
      text: body,
      run_id: 1,
    };
    axios.post("http://localhost:3001/comment", comment).then((res) => {
      console.log("SUCESSS!");
      this.setState({ comments: this.state.comments.concat([res.data]) });
    });
  }

  clickHandler() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          key={comment.comment_id}
          body={comment.text}
          user_id={comment.user_id}
          run_id={comment.run_id}
        />
      );
    });
  }

  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }

  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/comment").then((res) => {
      console.log(res.data);
      this.setState({ comments: res.data });
    });
  }

  render() {
    const comments = this.getComments();
    let buttonText = "Show Comments";
    let commentNodes;

    if (this.state.showComments) {
      buttonText = "Hide Comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <React.Fragment>
        <DataPage />
        <div className="comment-box">
          <h2>Join the Discussion!</h2>
          <CommentForm addComment={this.addComment.bind(this)} />
          <button id="comment-reveal" onClick={this.clickHandler.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this.getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>
      </React.Fragment>
    );
  }
}

export default CommentBox;

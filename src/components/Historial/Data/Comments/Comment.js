import './Comments.css';
import React from 'react';

class Comment extends React.Component {
    deleteComment(){
        alert("-- DELETE Comment Functionality COMMING SOON...");
    }

    render(){
        return(
            <div className='comment'>
                <p className='comment-body'>{this.props.body}</p>
                <div className='comment-footer'>
                <a href="#" className="comment-footer-delete" onClick={this.deleteComment}>Delete Comment</a>
                </div>
            </div>
        );
    }
}

export default Comment;
import Button from "../../../UI/Button/Button";
import './Comments.css';
import React from 'react';

class CommentForm extends React.Component{

    handleSubmit(event) {
        event.preventDefault();
        let body = this.body;
        this.props.addComment(body.value);
    }

    render(){
        return (
            <form className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
                <div className='comment-form-fields'>
                    <textarea placeholder="Comment" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <Button type="submit">Post Comment</Button>
                </div>
            </form>
        );
    }
}

export default CommentForm;
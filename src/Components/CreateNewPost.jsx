import React from 'react';

const CreateNewPost = props => {
    return (
        <>
        <form onSubmit={props.savePost} className="newPostForm">
            <h1>Create New Post</h1>
            <input 
            type="text"
            onChange={props.savePostTitleToState}
            placeholder="title" 
            size="39" 
            required
            ref = {props.getTitle}
            />
            <br />
            <br />
            <textarea
            onChange={props.savePostContentToState}
            placeholder="contents" 
            cols="41" 
            rows="8" 
            required
            ref={props.getContent}
            ></textarea>
            <br />
            <br />
            <button>Save Post</button>
        </form>
</>
    );
};

export default CreateNewPost;
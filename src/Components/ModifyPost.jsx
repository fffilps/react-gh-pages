import React from 'react';

const ModifyPost = props => {
    return (
        <>
        <form>
            <h1>Modify Post</h1>
            <input 
            defaultValue = {props.title}
            onChange = {props.savePostTitleToState}
            type="text" 
            placeholder="title" 
            size="39" 
             />
            <br />
            <br />
            <textarea
            defaultValue = {props.content}
            onChange = {props.savePostContentToState}
            placeholder="contents" 
            cols="41" 
            rows="8" 
            required />
            <br />
            <br />
            <button onClick = {props.updatePost}>Update Post</button>
        </form>
        </>
    )
}

export default ModifyPost;
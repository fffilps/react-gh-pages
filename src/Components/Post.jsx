import React from 'react';

const Post = ({title, content, editPost, id, deletePost}) => {
    return (
        <>
        <section className="postSection">
            <h3 className="postTitle">{title}</h3>
            <p className="postContent">{content}</p>
            <div className="buttonsContainer">
            <button onClick={() => editPost(id)}>Edit</button>
            <button onClick={() => deletePost(id)}>Delete</button>
            </div>
        </section>
        </>
    )
}

export default Post;
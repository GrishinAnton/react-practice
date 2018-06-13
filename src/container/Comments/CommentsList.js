import React, { Component } from 'react';
import toggleOpen from 'decorators/toggleOpen';

function CommentList({ comments = [], isOpen, toggleOpen }) {
    
    const CommentsElements =
        comments
            .map(comment =>
                <li key={comment.id} className="article-item">{comment.text}</li>
            );
    
    return (
        <div>  
            <button onClick={toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button>

            <ul>
                { isOpen && CommentsElements}
            </ul>
        </div> 
       
    )
}

export default toggleOpen(CommentList)
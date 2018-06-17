import React from 'react';
import toggleOpen from 'decorators/toggleOpen';
import AddComments from 'container/Comments/AddComments'

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
                <label>Введите данные</label><br />                
                <AddComments />
            </ul>
        </div> 
       
    )
}

export default toggleOpen(CommentList);
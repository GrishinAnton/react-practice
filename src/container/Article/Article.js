import React from 'react';
import CommentsList from 'container/Comments/CommentsList';

function  Article ({ 
        article, 
        article: { comments }, 
        isOpen, 
        toggleOpen
    })  { 
        
    return (
        <div>
            <h3>{article.title}</h3>

            <button onClick={toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button> 

            {isOpen && <section>{article.text}</section>} 

            <h3>Comments</h3>
            <CommentsList comments = {article.comments}/>
        </div>
    )
}

export default Article;

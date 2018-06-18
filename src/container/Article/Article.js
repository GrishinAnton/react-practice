import React from 'react';
import CommentsList from 'container/Comments/CommentsList';
import { CSSTransition } from 'react-transition-group';
import 'css/animation.css';

function  Article ({ 
        article, 
        article: { comments }, 
        isOpen, 
        toggleOpenArticle
    })  {        
        
    return (
        <div>
            <h3>{article.title}</h3>

            <button onClick={toggleOpenArticle}>
                {isOpen ? 'close' : 'open'}
            </button> 

                {/* <CSSTransition
                    component="span"
                    classNames="example"   
                    timeout={1000}           
                >     */}
                {isOpen &&<section>{article.text}</section>} 
                {/* </CSSTransition> */}
            

            <h3>Comments</h3>
            
            <CommentsList comments = {article.comments}/>
            
        </div>
    )
}

export default Article;

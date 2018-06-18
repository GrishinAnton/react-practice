import React from 'react';
import CommentsList from 'container/Comments/CommentsList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
                <TransitionGroup className="111">
                    {isOpen && <CSSTransition
                        component="span"
                        classNames="example"   
                        timeout={300}           
                    >    
                        <section>{article.text}</section>
                    </CSSTransition>} 
                </TransitionGroup>
                

            <h3>Comments</h3>
            
            <CommentsList comments = {article.comments}/>
            
        </div>
    )
}

export default Article;

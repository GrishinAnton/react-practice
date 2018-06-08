import React from 'react';

const Article = ({ 
        article, 
        article: { comments }, 
        state: { isOpen }, 
        state: { isCommentsOpen }, 
        toggleClick, 
        toggleComments 
    }) => { 
        
    return (
        <div>
            <h3>{article.title}</h3>

            <button onClick={toggleClick}>
                {isOpen ? 'close' : 'open'}
            </button> 

            {isOpen && <section>{article.text}</section>} 

            <h3>Comments</h3>

            <button onClick={toggleComments}>
                {isCommentsOpen ? 'close' : 'open'}
            </button> 

            { isCommentsOpen && <ul>
                {comments && comments.map(comment => <li key={comment.id}>{comment.text}</li>)}
            </ul> }

        </div>
    )
}

export default Article;

//functional component
// export default function Article(props) {
//     const {article} = props;
    
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <p>{article.text}</p>
//         </div>
//     )
// }
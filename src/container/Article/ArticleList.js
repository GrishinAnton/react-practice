import React, {Component} from 'react';
import Article from 'container/Article/Article';


function ArticleList({ article }) {

    const articleElements =
        article
            .map(article =>
                <li key={article.id} className="article-item">
                    <Article
                        article={article}
                    />
                </li>
            );

    return (
        <ul>
            {articleElements}
        </ul>        
    )                                              
}   
    
export default ArticleList;
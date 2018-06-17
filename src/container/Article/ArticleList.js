import React from 'react';
import Article from 'container/Article/Article';
import accordion from '../../decorators/accordion';



function ArticleList({ article, toggleOpenArticle, id}) {

    const articleElements =
        article
            .map(article =>
                <li key={article.id} className="article-item">
                    <Article
                        article={article}
                        isOpen = {article.id === id}
                        toggleOpenArticle = {toggleOpenArticle(article.id)}
                    />
                </li>
            );

    return (
        <ul>
            {articleElements}
        </ul>        
    )                                             
}   

export default accordion(ArticleList)
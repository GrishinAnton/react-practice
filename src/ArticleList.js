import React from 'react';
import Article from './Article';

export default function ArticleList(articles) {
    const { article } = articles   
    const articleElements = article.map(article => <li key={article.id}><Article article={article} /></li>);
   
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
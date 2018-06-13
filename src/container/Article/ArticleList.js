import React, {Component} from 'react';
import Article from 'container/Article/Article';


export default class ArticleList extends Component {

    state = {
        openArticleId: null
    }

    render() {
        const articleElements =
            this.props.article
                .map(article =>
                    <li key={article.id} className="article-item">
                        <Article
                            article={article}
                            isOpen = {article.id === this.state.openArticleId}
                            toggleOpen = {this.toggleOpenArticle(article.id)}
                        />
                    </li>
                );

        return (
            <ul>
                {articleElements}
            </ul>        
        )  
    }   
    toggleOpenArticle = openArticleId => ev => {
        this.setState({openArticleId})
    }                                         
}   

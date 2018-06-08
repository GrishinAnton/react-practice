import React, {Component} from 'react';
import Article from 'container/Article/Article';

export default class ArticleList extends Component {

    state = {
        isOpen: true,
        isCommentsOpen: false
    }  

    toggleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }

    render() { 

        const { article } = this.props
        

        const articleElements = 
            article
                .map(article => 
                    <li key={article.id} className="article-item">
                        <Article 
                            article={article} 
                            state={this.state} 
                            toggleClick={this.toggleClick} 
                            toggleComments={this.toggleComments} 
                        />
                    </li>
                );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }                                               
}   
    

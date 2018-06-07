import React, {Component} from 'react';
import Comment from './Comment'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleClick}>
                    {isOpen ? 'open' : 'close'}
                </button>    
                {this.getBody()}
                <Comment comments={article.comments} />
            </div>
        )
    }
    getBody() {
        if(this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>

    }

    toggleClick = () => {
        // console.log(ev);
        // console.log(ev.nativeEvent);
        
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleList from './ArticleList';
import {articles} from './fixtures'

ReactDOM.render(<ArticleList article={articles} />, document.getElementById('root'));


import React from 'react';
import ArticleList from 'container/Article/ArticleList';
import { articles } from 'data/fixtures';
import logo from 'img/logo.svg';
import 'css/App.css';

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <ArticleList article={articles} />
    </div>
  );
}

export default App;

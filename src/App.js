import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainArticle from './components/MainArticle/MainArticle';
import SecondArticle from './components/SecondArticle/SecondArticle';
import Tab from './components/Tab/Tab';
import '../src/App.css';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <Search />
        <main role="main">
          <h2 className="section-title">Latest articles</h2>
          <MainArticle />
          <SecondArticle />
        </main>
        <section>
          <h2 className="section-title">People to contact</h2>
          <Tab />
        </section>
      </div>
      <footer role="contentinfo">
        <div>
          <p>Accessible React App</p>
          <p>Created by Snook ©2020</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

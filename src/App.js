import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainArticle from './components/MainArticle/MainArticle';
import SecondArticle from './components/SecondArticle/SecondArticle';
import Tab from './components/Tab/Tab';
import '../src/App.css';
import Search from './components/Search/Search';
import Radio from './components/Radio/Radio';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <section>
          <Search />
        </section>

        <main role="main">
          <h2 className="section-title">Latest articles</h2>
          <MainArticle />
          <SecondArticle />
        </main>

        <section>
          <h2 className="section-title">
            Tab Elements <span aria-hidden="true">-</span> Our team
          </h2>
          <Tab />
        </section>

        <aside>
          <h2 className="section-title">
            Radio Elements <span aria-hidden="true">-</span> Contact Preferences
          </h2>
          <Radio />
        </aside>
      </div>
      <footer role="contentinfo">
        <div>
          <p>Accessible React App</p>
          <p>Created by Snook ©2020</p>
        </div>
      </footer>
    </>
  );
};

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalSearch, NavBar } from './components';
import { navItems } from './consts';
import { Bookmarks, Search } from './pages';

const App: React.FC = () => (
  <div className="App">
    <GlobalSearch />
    <NavBar navItems={navItems} />
    <div className="content">
      <Route path="/" component={Search} exact />
      <Route path="/bookmarks" component={Bookmarks} />
    </div>
  </div>
);

export default App;

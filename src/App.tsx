import React from 'react';
import {GlobalSearch, NavBar} from './components';
import {navItems} from './consts';
import {Route} from 'react-router-dom';
import {Bookmarks, Search} from "./pages";


const App: React.FC = () => {
  return (
    <div className='App'>
      <GlobalSearch />
      <NavBar navItems={navItems} />
      <div className='content'>
        <Route path='/' component={Search} exact />
        <Route path='/bookmarks' component={Bookmarks} />
      </div>
    </div>
  );
};

export default App;

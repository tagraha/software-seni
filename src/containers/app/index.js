import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import UserDetail from '../userdetail';

const App = () => (
  <div>
    <header>
      <Link to="/">Home&nbsp;</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/user/:slug" component={UserDetail} />
    </main>
  </div>
);

export default App;

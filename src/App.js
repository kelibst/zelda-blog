/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import home from './components/routescont/home';
import pricing from './components/routescont/pricing';
import about from './components/routescont/about';
import Post from './components/routescont/Post';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/zelda-blog/" component={home} />
          <Route path="/pricing" component={pricing} />
          <Route path="/about" component={about} />
          <Route path="/:post_id" component={Post} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from './components/header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import home from './components/routescont/home';
import pricing from './components/routescont/pricing';
import about from './components/routescont/about';
import Post from './components/routescont/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={home} />
        <Route path="/pricing" component={pricing} />
        <Route path="/about" component={about} />
        <Route path="/:post_id" component={Post} />
      </Switch>
          
      </div>
    </BrowserRouter>
  );
}

export default App;

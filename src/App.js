import React from 'react';
import Header from './components/header'
import {BrowserRouter, Route} from 'react-router-dom'
import home from './components/routescont/home';
import pricing from './components/routescont/pricing';
import about from './components/routescont/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Route exact path="/" component={home} />
          <Route path="/pricing" component={pricing} />
          <Route path="/about" component={about} />
      </div>
    </BrowserRouter>
  );
}

export default App;

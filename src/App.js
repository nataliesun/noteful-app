import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './App.css';

import dummyStore from './dummy-store';

import FolderPage from './FolderPage/FolderPage';
import MainPage from './MainPage/MainPage';


class App extends Component {
  state = dummyStore

  render() {
    return (
      <div className="App">
        <header>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <main>
          <Route exact path='/' render={() => <MainPage data={this.state} />} />
          <Route path='/folder' component={FolderPage} />
        </main>
      </div>
    );
  }
}

export default App;

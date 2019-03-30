import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './App.css';

import dummyStore from './dummy-store';

import FolderPage from './FolderPage/FolderPage';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage'


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

          <Route path='/folder/:folderId' render={(routerProps) => {
            return <FolderPage rProps={routerProps.match.params.folderId} data={this.state}/>
          }
          } />

          <Route path='/note/:noteId' render={
            (routerProps) => {
              return <NotePage rProps={
                routerProps.match.params.noteId} 
                data={this.state} />
            }
          } />

        </main>
      </div>
    );
  }
}

export default App;

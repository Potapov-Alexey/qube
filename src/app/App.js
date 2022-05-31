import './App.css';
import React, {useEffect} from "react";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite'
import Main from '../components/main/main';
import Header from '../components/header/header';

function App() {

  const {searchStore} = useStore();
  
  useEffect(() => {
    searchStore.loadDefaultMovies();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    </Router>
  );
}

export default observer(App);

import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList.js"
import Movie from "./Movies/Movie.js"

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path="/movies/:id">
        <Movie />
      </Route>
      </div>
    </div>
  );
};

export default App;

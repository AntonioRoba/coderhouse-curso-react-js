import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/item/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

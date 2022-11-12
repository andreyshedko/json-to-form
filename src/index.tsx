import React from 'react';

import { JsonToFormBuilder } from 'components';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Docs } from './components/Docs/Docs';
import { Home } from './components/Home';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="docs" element={<Docs />} />
          <Route element={<JsonToFormBuilder />} index />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

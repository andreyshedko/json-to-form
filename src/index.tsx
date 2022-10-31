import React from 'react';

import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { JsonToFormBuilder } from './components/JsonToFormBuilder';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <JsonToFormBuilder />
    </RecoilRoot>
  </React.StrictMode>
);

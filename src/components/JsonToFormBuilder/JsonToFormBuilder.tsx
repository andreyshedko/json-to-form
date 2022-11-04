import React from 'react';

import { JsonInput } from '../JsonInput';
import { Result } from '../Result';

export const JsonToFormBuilder = (): JSX.Element => {
  return (
    <div className='container'>
      <div className='box'>
        <h1>JSON to form</h1>
        This application allows you to create HTML form from the JSON file. <br />
        The example of the expected input: <br />
        <img src='./screenshot.png' alt='input example' />
      </div>
      <div className='columns'>
        <div className='column'>
          <JsonInput />
        </div>
        <div className='column'>
          <Result />
        </div>
      </div>
    </div>
  );
};

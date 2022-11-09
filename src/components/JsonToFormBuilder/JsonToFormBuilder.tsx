import React from 'react';

import { JsonInput } from '../JsonInput';
import { Result } from '../Result';

export const JsonToFormBuilder = (): JSX.Element => {
  return (
    <div className='container'>
      <div className='box'>
        <h1 className='has-text-info is-size-1'>JSON to form</h1>
        <p className='is-size-6'>
          This application allow to create HTML form from the JSON file. <br />
          The example of the expected input:
        </p>
        <img src='https://raw.githubusercontent.com/andreyshedko/veeam/main/public/screenshot.png' alt='input example' />
        <p className='has-text-danger'>Documentation will be available soon.</p>
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

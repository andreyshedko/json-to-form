import React from 'react';

import { RecoilRoot } from 'recoil';

import { JsonInput } from '../JsonInput';
import { Result } from '../Result';

export const JsonToFormBuilder = (): JSX.Element => {
  return (
    <RecoilRoot>
      <div className='box'>
        <h1 className='has-text-info is-size-1'>JSON to form</h1>
        <p className='is-size-6'>
          This application allow to create HTML form from the JSON file.
        </p>
      </div>
      <div className='columns'>
        <div className='column'>
          <JsonInput />
        </div>
        <div className='column'>
          <Result />
        </div>
      </div>
    </RecoilRoot>
  );
};

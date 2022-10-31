import React from 'react';

import { JsonInput } from '../JsonInput';
import { Result } from '../Result';

export const JsonToFormBuilder = (): JSX.Element => {
  return (
    <div className='container'>
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

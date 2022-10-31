import React from 'react';

import { RecoilValue, useRecoilValue } from 'recoil';

import { formState } from 'state/input';
import { IForm } from 'types';

import Error from '../../utils/Inputs/Error';
import { FormBuilder } from '../FormBuilder';

export const Result = (): JSX.Element => {
  const jsonInput = useRecoilValue<string>(formState as RecoilValue<string>);
  let content = <progress className="progress is-small is-primary" max="100">Loading</progress>;

  try {
    // TODO - json schema to vallidate input values
    const parseResult: IForm = JSON.parse(jsonInput);
    if ('items' in parseResult) {
      content = <FormBuilder json={parseResult} />;
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    content = <Error message={errorMessage} />;
  }

  return <>
    <h1 className='has-text-gray is-size-2'>Result</h1>
    {content}
  </>;
};

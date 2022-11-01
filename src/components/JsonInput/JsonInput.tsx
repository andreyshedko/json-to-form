import React, { ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';
import { textState } from 'state/input';

export const JsonInput = (): JSX.Element => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  return <>
    <h1 className='has-text-gray is-size-2'>JSON Input</h1>
    <textarea
      style={{ minHeight: '50vh' }}
      className='textarea'
      placeholder='Please enter JSON string to generate form'
      aria-placeholder='Please enter JSON string to generate form'
      aria-multiline={true}

      onChange={onChange}
      value={text}
    >
    </textarea>
  </>;
};

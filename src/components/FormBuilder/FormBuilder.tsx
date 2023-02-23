import React, { FC } from 'react';

import { IForm } from 'types';

import { ButtonsBuilder } from './ElementsBuilder/ButtonsBuilder';
import { InputsBuilder } from './ElementsBuilder/InputsBuilder';

import { Form } from './Form';

interface IFormBuilderProps {
  json: IForm
}

export const FormBuilder: FC<IFormBuilderProps> = (props: IFormBuilderProps): JSX.Element => {
  const { autocomplete, name, action, method, enctype, items, title } = props.json;

  const buttons = items.filter(el => el.type === 'button');
  const inputs = items.filter(el => el.type !== 'button');

  const copyToClipboard = (): void => {
    const form = document.getElementById('form-container');
    if (form && 'clipboard' in navigator) {
      // Copy the text inside the text field
      void navigator.clipboard.writeText(form?.innerHTML);
    }
  };

  return (
    <>
      <div id='form-container'>
        <Form
          autocomplete={autocomplete}
          name={name}
          action={action}
          method={method}
          enctype={enctype}
          title={title}
        >
          <InputsBuilder items={inputs} />
          <ButtonsBuilder buttons={buttons} />
        </Form>
      </div>
      <button
        className="button"
        onClick={copyToClipboard}
      >
        <span
          className="icon is-small"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 7H7V5H13V7Z" fill="currentColor" />
            <path d="M13 11H7V9H13V11Z" fill="currentColor" />
            <path d="M7 15H13V13H7V15Z" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>Copy to Clipboard</span>
      </button>
    </>
  );
};

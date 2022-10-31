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

  return (
    <>
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
    </>
  );
};

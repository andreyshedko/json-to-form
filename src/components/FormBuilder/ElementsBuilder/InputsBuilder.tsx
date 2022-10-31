import React, { FC } from 'react';

import { Inputs } from 'types';

import { Renderer } from './Renderer';

interface IElementsBuilderProps {
  items: ReadonlyArray<Record<string, unknown> & { type: Inputs }>
}

export const InputsBuilder: FC<IElementsBuilderProps> = (props: IElementsBuilderProps): JSX.Element => {
  const { items } = props;

  return <><Renderer items={items} /></>;
};

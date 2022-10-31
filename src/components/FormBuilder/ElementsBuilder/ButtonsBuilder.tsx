import React, { FC, PropsWithChildren } from 'react';

import { Inputs } from 'types';

import { Renderer } from './Renderer';

interface IElementsBuilderProps {
  buttons: ReadonlyArray<Record<string, unknown> & { type: Inputs }>
}

export const ButtonsBuilder: FC<IElementsBuilderProps> =
    (props: PropsWithChildren<IElementsBuilderProps>): JSX.Element => {
      const { buttons } = props;

      return <div className='field is-grouped mt-1'>
            <Renderer items={buttons} />
        </div>;
    };

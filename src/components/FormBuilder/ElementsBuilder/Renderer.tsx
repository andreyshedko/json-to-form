import React, { FC, Suspense } from 'react';

import shortid from 'shortid';
import { Inputs } from 'types';
import { getLazyComponent } from 'utils/FormBuilder';

import Error from '../../../utils/Inputs/Error';

interface IRendererProps {
  items: ReadonlyArray<Record<string, unknown> & { type: Inputs }>
}

export const Renderer: FC<IRendererProps> = (props: IRendererProps): JSX.Element => {
  const { items } = props;

  const buildElementsTree = (elements: ReadonlyArray<Record<string, unknown> & { type: Inputs }>): JSX.Element => {
    return (
          <>
            {
              elements.map((item) => {
                let element = <></>;
                if (item?.type) {
                  try {
                    const Input = getLazyComponent(item.type);
                    element = Input ? <Suspense><Input key={shortid.generate()} {...item} /></Suspense> : <Error message='Invalid type' />;
                  } catch (err) {
                    element = <Error message={`Can't find this input type: ${item.type as string}`} />;
                  }
                }
                return element;
              })
            }
          </>
    );
  };

  return <>{items && items.length > 0 && buildElementsTree(items)}</>;
};

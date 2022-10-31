import { ElementType, FC, lazy, LazyExoticComponent } from 'react';

import { Inputs } from 'types';

const PATH_TO_INPUTS = './Inputs/';
const PATH_TO_FALLBACK = './Inputs/Error';

const components: ReadonlyMap<Inputs, LazyExoticComponent<FC>> =
  new Map<Inputs, LazyExoticComponent<FC>>()
    .set('number', lazy(async () => await import(`${PATH_TO_INPUTS}NumericInput`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('text', lazy(async () => await import(`${PATH_TO_INPUTS}TextInput`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('button', lazy(async () => await import(`${PATH_TO_INPUTS}Button`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('checkbox', lazy(async () => await import(`${PATH_TO_INPUTS}Checkbox`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('date', lazy(async () => await import(`${PATH_TO_INPUTS}DateInput`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('radio', lazy(async () => await import(`${PATH_TO_INPUTS}Radio`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))))
    .set('textarea', lazy(async () => await import(`${PATH_TO_INPUTS}TextArea`)
      .catch(async () => await import(`${PATH_TO_FALLBACK}`))));

export const getLazyComponent = (type: Inputs): ElementType => {
  return components.get(type) as ElementType;
};

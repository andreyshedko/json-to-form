import React, { FC, PropsWithChildren } from 'react';

import { IForm } from 'types';

type FormWithoutItems = Omit<IForm, 'items'> & { title: string };

export const Form: FC<PropsWithChildren<FormWithoutItems>> = (props: PropsWithChildren<FormWithoutItems>): JSX.Element => {
  const { autocomplete, name, action, method, enctype, title } = props;

  return <form
        autoComplete={autocomplete}
        name={name}
        action={action}
        method={method}
        encType={enctype}
    >
        <h3 className='has-text-dark'>{title}</h3>
        {props.children}
    </form>;
};

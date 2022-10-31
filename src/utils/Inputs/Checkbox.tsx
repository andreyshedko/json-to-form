import React, { FC } from 'react';

import { ICheckboxInput } from 'types';

type CheckboxInputProps = ICheckboxInput & { onClick?: () => void };

const Checkbox: FC<CheckboxInputProps> = (props: CheckboxInputProps): JSX.Element => {
  const { id, name, type = 'checkbox', value, onClick, checked } = props;

  return <div className='control'>
        <label className='checkbox'>
            <input
                className='mr-1'
                type={type}
                id={id}
                name={name}
                checked={checked}
                onClick={onClick}
            />
            {value}
        </label>
    </div>;
};

export default Checkbox;

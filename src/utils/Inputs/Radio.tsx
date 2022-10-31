import React, { FC } from 'react';

import { IRadioInput } from 'types';

type RadioInputProps = IRadioInput & { onClick?: () => void };

const Radio: FC<RadioInputProps> = (props: RadioInputProps): JSX.Element => {
  const { id, name, type = 'radio', value, onClick, checked } = props;

  return <div className='control'>
        <label className='radio'>
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

export default Radio;

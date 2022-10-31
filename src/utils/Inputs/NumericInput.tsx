import React, { ChangeEvent, FC } from 'react';

import { INumberInput } from 'types';

type NumericInputProps = INumberInput & { onChange?: (value: string) => void };

const NumericInput: FC<NumericInputProps> = (props: NumericInputProps): JSX.Element => {
  const { id, name, autocomplete, readonly, type = 'number', value, max, min, step, onChange } = props;

  return <div className='field'>
        {id && name &&
            <label
                htmlFor={id}
                className='label'
            >
                {name}
            </label>
        }
        <div className='control'>
            <input
                className={'input'}
                type={type}
                id={id}
                name={name}
                autoComplete={autocomplete}
                readOnly={readonly}
                value={value}
                max={max}
                min={min}
                step={step}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
            />
        </div>
    </div>;
};

export default NumericInput;

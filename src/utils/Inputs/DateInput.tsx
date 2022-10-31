import React, { ChangeEvent, FC } from 'react';

import { IDateInput } from 'types';

type DateInputProps = IDateInput & { onChange?: (value: string) => void };

const DateInput: FC<DateInputProps> = (props: DateInputProps): JSX.Element => {
  const { id, name, autocomplete, readonly, type = 'text', value, onChange, max, min, step } = props;

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

export default DateInput;

import React, { ChangeEvent, FC } from 'react';

import { ITextInput } from 'types';

type TextInputProps = ITextInput & { onChange?: (value: string) => void };

const TextInput: FC<TextInputProps> = (props: TextInputProps): JSX.Element => {
  const { id, name, autocomplete, readonly, type = 'text', value, maxlength, minlength, size, onChange } = props;

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
                className='input'
                type={type}
                id={id}
                name={name}
                autoComplete={autocomplete}
                readOnly={readonly}
                value={value}
                maxLength={maxlength}
                minLength={minlength}
                size={size}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
            />
        </div>
    </div>;
};

export default TextInput;

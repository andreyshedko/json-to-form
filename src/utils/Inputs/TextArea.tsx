import React, { ChangeEvent, FC } from 'react';

import { ITextAreaInput } from 'types';

type TextAreaInputProps = ITextAreaInput & { onChange?: (value: string) => void };

const TextAreaInput: FC<TextAreaInputProps> = (props: TextAreaInputProps): JSX.Element => {
  const { id, name, autocomplete, readonly, value, maxlength, minlength, onChange, rows, cols } = props;

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
            <textarea
                className={'input'}
                id={id}
                name={name}
                autoComplete={autocomplete}
                readOnly={readonly}
                value={value}
                maxLength={maxlength}
                minLength={minlength}
                rows={rows}
                cols={cols}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value)}
            />
        </div>
    </div>;
};

export default TextAreaInput;

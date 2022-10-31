import React, { FC } from 'react';

import { IButton } from 'types';

type ButtonInputProps = IButton & { onClick?: () => void };

const Button: FC<ButtonInputProps> = (props: ButtonInputProps): JSX.Element => {
  const { id, name, type = 'button', value, onClick } = props;
  const buttonBackgroundColor = value && value === 'Cancel' ? 'is-light' : 'is-primary';
  const cssClass = `${buttonBackgroundColor} button`;

  return <div className='control mb-1'>
        <input
            className={cssClass}
            type={type}
            id={id}
            name={name}
            value={value}
            onClick={onClick}
        />
    </div>;
};

export default Button;

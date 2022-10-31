import React, { FC } from 'react';

interface IErrorProps {
  message?: string
}

const Error: FC<IErrorProps> = (props: IErrorProps): JSX.Element => {
  const { message = 'Invalid type' } = props;

  return <article className="message is-danger">
  <div className="message-header">
    <p>Error</p>
  </div>
  <div className="message-body">
    {message}
  </div>
</article>;
};

export default Error;

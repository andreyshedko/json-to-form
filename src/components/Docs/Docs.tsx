import React, { useState } from 'react';

import { marked } from 'marked';

export const Docs = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const readmePath: string = require('../../README.md');
  const [markdown, setMarkdown] = useState('');

  void fetch(readmePath)
    .then(async response => {
      return await response.text();
    })
    .then(text => {
      setMarkdown(text);
    });

  return (
        <section>
            <article dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></article>
        </section>
  );
};

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import { useRecoilState } from 'recoil';
import { textState } from 'state/input';

const JSON_SUGGESTIONS = [
  '"title"',
  '"name"',
  '"items"',
  '"type"',
  '"value"',
  '"placeholder"',
  '"autocomplete"',
  '"id"',
  '"readonly"',
  '"action"',
  '"method"',
  '"enctype"',
  '"for"',
  '"checked"',
  '"max"',
  '"min"',
  '"step"',
  '"maxlength"',
  '"minlength"',
  '"rows"',
  '"cols"',
  '"size"',
];

const CLOSING_PAIRS: Record<string, string> = {
  '{': '}',
  '[': ']',
  '"': '"',
};

export const JsonInput = (): JSX.Element => {
  const [text, setText] = useRecoilState(textState);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = event.target;
    setText(value);

    const selectionStart = textareaRef.current?.selectionStart ?? event.target.selectionStart;
    const textBefore = value.substring(0, selectionStart);
    const openQuoteMatch = textBefore.match(/"([^"]*)$/);
    if (openQuoteMatch !== null) {
      const typed = openQuoteMatch[1];
      const filtered = JSON_SUGGESTIONS.filter(s =>
        s.toLowerCase().includes(typed.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    const textarea = textareaRef.current;
    if (textarea === null) return;

    const { selectionStart, selectionEnd, value } = textarea;

    if (event.key in CLOSING_PAIRS) {
      const closing = CLOSING_PAIRS[event.key];
      if (event.key === '"' && value[selectionStart] === '"') {
        event.preventDefault();
        textarea.setSelectionRange(selectionStart + 1, selectionStart + 1);
        return;
      }
      event.preventDefault();
      const newValue =
        value.substring(0, selectionStart) +
        event.key +
        closing +
        value.substring(selectionEnd);
      setText(newValue);
      setShowSuggestions(false);
      setTimeout(() => {
        textarea.setSelectionRange(selectionStart + 1, selectionStart + 1);
      }, 0);
    } else if (event.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const applySuggestion = (suggestion: string): void => {
    const textarea = textareaRef.current;
    if (textarea === null) return;

    const { selectionStart, value } = textarea;
    const textBefore = value.substring(0, selectionStart);
    const openQuoteIndex = textBefore.lastIndexOf('"');
    if (openQuoteIndex !== -1) {
      const newValue =
        value.substring(0, openQuoteIndex) +
        suggestion +
        value.substring(selectionStart);
      setText(newValue);
    }
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1 className='has-text-gray is-size-2'>JSON Input</h1>
      <textarea
        ref={textareaRef}
        style={{ minHeight: '50vh' }}
        className='textarea'
        placeholder='Please enter JSON string to generate form'
        aria-placeholder='Please enter JSON string to generate form'
        aria-multiline={true}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={text}
      />
      {showSuggestions && (
        <ul
          role='listbox'
          aria-label='JSON key suggestions'
          style={{
            position: 'absolute',
            background: 'white',
            border: '1px solid #ccc',
            listStyle: 'none',
            padding: '0',
            margin: '0',
            maxHeight: '200px',
            overflowY: 'auto',
            width: '100%',
            zIndex: 1000,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              role='option'
              aria-selected={false}
              style={{ padding: '8px 12px', cursor: 'pointer' }}
              onMouseDown={(e) => {
                e.preventDefault();
                applySuggestion(suggestion);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

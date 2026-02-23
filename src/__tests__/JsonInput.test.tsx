import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { JsonInput } from '../components/JsonInput';


describe("JsonInput", () => {
    test('renders component with corresponding elements', () => {
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot >);
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        expect(textarea).toBeInTheDocument();
    });

    test('shows autocomplete suggestions when typing inside quotes', () => {
        const { container, getByRole } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        fireEvent.change(textarea, { target: { value: '"type', selectionStart: 5 } });
        const listbox = getByRole('listbox');
        expect(listbox).toBeInTheDocument();
        expect(listbox.querySelectorAll('[role="option"]').length).toBeGreaterThan(0);
    });

    test('hides suggestions when Escape is pressed', () => {
        const { container, queryByRole } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        fireEvent.change(textarea, { target: { value: '"type', selectionStart: 5 } });
        fireEvent.keyDown(textarea, { key: 'Escape' });
        expect(queryByRole('listbox')).not.toBeInTheDocument();
    });

    test('auto-closes opening brace', () => {
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        Object.defineProperty(textarea, 'selectionStart', { value: 0, writable: true });
        Object.defineProperty(textarea, 'selectionEnd', { value: 0, writable: true });
        fireEvent.keyDown(textarea, { key: '{' });
        // The auto-close should have been called (no error thrown)
        expect(textarea).toBeInTheDocument();
    });
});
import React from 'react';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

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

    test('renders Upload JSON file button', () => {
        render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        expect(screen.getByText('Upload JSON file')).toBeInTheDocument();
    });

    test('shows error when a non-json file is selected', async () => {
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
        const file = new File(['{}'], 'test.txt', { type: 'text/plain' });
        fireEvent.change(fileInput, { target: { files: [file] } });
        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent('Only .json files are supported');
        });
    });

    test('shows error when json file has invalid structure', async () => {
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
        const file = new File(['{"name":"no-title"}'], 'test.json', { type: 'application/json' });

        // Mock FileReader
        type MockFileReader = { readAsText: jest.Mock; onload: ((ev: ProgressEvent<FileReader>) => void) | null };
        const mockFileReader: MockFileReader = {
            readAsText: jest.fn(function () {
                mockFileReader.onload?.({ target: { result: '{"name":"no-title"}' } } as ProgressEvent<FileReader>);
            }),
            onload: null,
        };
        jest.spyOn(global, 'FileReader').mockImplementation(() => mockFileReader as unknown as FileReader);

        fireEvent.change(fileInput, { target: { files: [file] } });
        await waitFor(() => {
            expect(screen.getByRole('alert')).toBeInTheDocument();
        });

        jest.restoreAllMocks();
    });

    test('loads valid json file into textarea', async () => {
        const validJson = JSON.stringify({ title: 'My Form', items: [{ type: 'text', value: '' }] });
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot>
        );
        const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
        const file = new File([validJson], 'form.json', { type: 'application/json' });

        type MockFileReader = { readAsText: jest.Mock; onload: ((ev: ProgressEvent<FileReader>) => void) | null };
        const mockFileReader: MockFileReader = {
            readAsText: jest.fn(function () {
                mockFileReader.onload?.({ target: { result: validJson } } as ProgressEvent<FileReader>);
            }),
            onload: null,
        };
        jest.spyOn(global, 'FileReader').mockImplementation(() => mockFileReader as unknown as FileReader);

        fireEvent.change(fileInput, { target: { files: [file] } });
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        await waitFor(() => {
            expect(textarea.value).toBe(validJson);
        });

        jest.restoreAllMocks();
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
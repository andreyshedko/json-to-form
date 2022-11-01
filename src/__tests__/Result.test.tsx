import React from 'react';

import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { Result } from '../components/Result';
import {textState} from '../state/input'

jest.useFakeTimers();

describe("Result", () => {
    test('renders initial state', () => {
        const { container } = render(
            <RecoilRoot>
                <Result />
            </RecoilRoot >);
        const progress = container.querySelector('progress');
        expect(progress).toBeInTheDocument();
    });

    test('renders form when state changed', async () => {
        const initializeState = ({ set }: any) => {
            set(textState, JSON.stringify({ "items": [{ "type": "number", "name": "numeric field", "id": "1" }] }));
        };

        const { container } = render(
            <RecoilRoot initializeState={initializeState}>
                <Result />
            </RecoilRoot >);

        expect(container.querySelector("form")).toBeInTheDocument();
    });
});
import React from 'react';

import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { Renderer } from '../components/FormBuilder/ElementsBuilder/Renderer';
import { Inputs } from '../types'
import * as FormBuilderUtils from '../utils/FormBuilder';

describe("Renderer", () => {
    test('renders empty fragment as initial state', () => {
        const { container } = render(<Renderer items={[]} />, { wrapper: RecoilRoot });
        expect(container.hasChildNodes()).toEqual(false);
    });

    test('renders error component for unsupported type', () => {
        const items: ReadonlyArray<Record<string, unknown> & { type: Inputs }> = [{ "type": "label" }];
        render(<Renderer items={items} />, { wrapper: RecoilRoot });
        expect(screen.getByText("Invalid type")).toBeInTheDocument();
    });

    test('renders error component when getLazyComponent throws', () => {
        jest.spyOn(FormBuilderUtils, 'getLazyComponent').mockImplementation(() => {
            throw new Error('Component not found');
        });
        const items: ReadonlyArray<Record<string, unknown> & { type: Inputs }> = [{ "type": "number" }];
        render(<Renderer items={items} />, { wrapper: RecoilRoot });
        expect(screen.getByText("Can't find this input type: number")).toBeInTheDocument();
        jest.restoreAllMocks();
    });
});
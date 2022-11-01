import React from 'react';

import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { Renderer } from '../components/FormBuilder/ElementsBuilder/Renderer';
import { Inputs } from '../types'

describe("Renderer", () => {
    // test('renders empty fragment as initial state', async () => {
    //     const { container } = render(<Renderer items={[]} />, { wrapper: RecoilRoot });
    //     expect(container.hasChildNodes()).toEqual(false);
    // });

    xtest('renders error component on num', async () => {
        const items: ReadonlyArray<Record<string, unknown> & { type: Inputs }> = [{"type": "number", "name": "test input", "id": "1" }]
        render(<Renderer items={items} />, { wrapper: RecoilRoot });
        expect(screen.getByLabelText("test input")).toEqual({});
    });
});
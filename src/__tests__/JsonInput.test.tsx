import React from 'react';

import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { JsonInput } from '../components/JsonInput';


describe("JsonInput", () => {
    test('renders component with corresponding elements', () => {
        const { container } = render(
            <RecoilRoot>
                <JsonInput />
            </RecoilRoot >);
        const teaxtarea = container.querySelector('textarea');
        expect(teaxtarea).toBeInTheDocument();
    });
});
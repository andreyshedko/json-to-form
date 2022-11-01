import React from 'react';

import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { Form } from '../components/FormBuilder/Form';


describe("Form", () => {
    test('renders form', () => {
        const { container } = render(
            <RecoilRoot>
                <Form title={''} />
            </RecoilRoot >);
        const form = container.querySelector('form');
        expect(form).toBeInTheDocument();
    });
});
import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'
import { FormBuilder } from '../components/FormBuilder/FormBuilder';
import React from 'react';
import { IForm } from '../types';


describe("FormBuilder", () => {
    test('renders form', () => {
        const json: IForm = {"autocomplete": "on", "action": "/api/text", "title": "Form", "items": [{"type": "number"}]}
        const { container } = render(<FormBuilder json={json} />, {wrapper: RecoilRoot});
        const form = container.querySelector("form")
        expect(form).toBeDefined();

        const inputEl = container.querySelector(`input[type="number"]`);
        expect(inputEl).toBeDefined();
    });
});
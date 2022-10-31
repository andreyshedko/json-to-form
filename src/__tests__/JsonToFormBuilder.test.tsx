import React from 'react';

import { render, screen } from '@testing-library/react';

import { JsonToFormBuilder } from '../components/JsonToFormBuilder/JsonToFormBuilder';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom'


describe("JsonToFormBuilder", () => {
  test('renders component with corresponding elements', () => {
    render(
      <RecoilRoot>
        <JsonToFormBuilder />
      </RecoilRoot >);
    const jsonInput = screen.getByText(/JSON Input/i);
    expect(jsonInput).toBeInTheDocument();
    const result = screen.getByText(/Result/i);
    expect(result).toBeInTheDocument();
  });

  test('renders component with progress as initial state', () => {
    const { container } = render(
      <RecoilRoot>
        <JsonToFormBuilder />
      </RecoilRoot>);
    const progress = container.querySelector('progress');
    expect(progress).toBeInTheDocument();
  });
});

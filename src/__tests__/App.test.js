import React from 'react';
import { render, screen } from '@testing-library/react';
import { JsonToFormBuilder } from '../components/JsonToFormBuilder/JsonToFormBuilder';
test('renders learn react link', () => {
    render(React.createElement(JsonToFormBuilder, null));
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map
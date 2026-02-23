import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import Button from '../utils/Inputs/Button';
import Checkbox from '../utils/Inputs/Checkbox';
import DateInput from '../utils/Inputs/DateInput';
import Error from '../utils/Inputs/Error';
import NumericInput from '../utils/Inputs/NumericInput';
import Radio from '../utils/Inputs/Radio';
import TextAreaInput from '../utils/Inputs/TextArea';
import TextInput from '../utils/Inputs/TextInput';

describe("Error", () => {
    test('renders with default message', () => {
        render(<Error />);
        expect(screen.getByText('Invalid type')).toBeInTheDocument();
    });

    test('renders with custom message', () => {
        render(<Error message="Custom error message" />);
        expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });
});

describe("NumericInput", () => {
    test('renders input without label when id or name is missing', () => {
        const { container } = render(<NumericInput type="number" value={0} />);
        expect(container.querySelector('input[type="number"]')).toBeInTheDocument();
        expect(container.querySelector('label')).not.toBeInTheDocument();
    });

    test('renders input with label when id and name are provided', () => {
        render(<NumericInput type="number" id="num1" name="Number field" value={42} />);
        expect(screen.getByLabelText('Number field')).toBeInTheDocument();
    });

    test('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        const { container } = render(<NumericInput type="number" value={0} onChange={handleChange} />);
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: '5' } });
        expect(handleChange).toHaveBeenCalledWith('5');
    });
});

describe("TextInput", () => {
    test('renders input without label when id or name is missing', () => {
        const { container } = render(<TextInput type="text" value="hello" />);
        expect(container.querySelector('input[type="text"]')).toBeInTheDocument();
        expect(container.querySelector('label')).not.toBeInTheDocument();
    });

    test('renders input with label when id and name are provided', () => {
        render(<TextInput type="text" id="txt1" name="Text field" value="hello" />);
        expect(screen.getByLabelText('Text field')).toBeInTheDocument();
    });

    test('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextInput type="text" value="" onChange={handleChange} />);
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'new text' } });
        expect(handleChange).toHaveBeenCalledWith('new text');
    });
});

describe("TextAreaInput", () => {
    test('renders textarea without label when id or name is missing', () => {
        const { container } = render(<TextAreaInput type="textarea" value="content" />);
        expect(container.querySelector('textarea')).toBeInTheDocument();
        expect(container.querySelector('label')).not.toBeInTheDocument();
    });

    test('renders textarea with label when id and name are provided', () => {
        render(<TextAreaInput type="textarea" id="ta1" name="Text area" value="content" />);
        expect(screen.getByLabelText('Text area')).toBeInTheDocument();
    });

    test('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextAreaInput type="textarea" value="" onChange={handleChange} />);
        const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
        fireEvent.change(textarea, { target: { value: 'typed text' } });
        expect(handleChange).toHaveBeenCalledWith('typed text');
    });
});

describe("Button", () => {
    test('renders submit button', () => {
        const { container } = render(<Button type="button" name="submit" value="Submit" />);
        expect(container.querySelector('input[type="button"]')).toBeInTheDocument();
    });

    test('renders Cancel button with light style', () => {
        const { container } = render(<Button type="button" name="cancel" value="Cancel" />);
        const input = container.querySelector('input');
        expect(input?.className).toContain('is-light');
    });

    test('renders non-Cancel button with primary style', () => {
        const { container } = render(<Button type="button" name="ok" value="OK" />);
        const input = container.querySelector('input');
        expect(input?.className).toContain('is-primary');
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { container } = render(<Button type="button" name="submit" value="Submit" onClick={handleClick} />);
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.click(input);
        expect(handleClick).toHaveBeenCalled();
    });
});

describe("Checkbox", () => {
    test('renders checkbox input', () => {
        const { container } = render(
            <Checkbox type="checkbox" id="chk1" name="agree" value="yes" checked={false} />
        );
        expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
    });

    test('renders checked checkbox', () => {
        const { container } = render(
            <Checkbox type="checkbox" id="chk2" name="agree" value="yes" checked={true} />
        );
        const input = container.querySelector('input') as HTMLInputElement;
        expect(input.checked).toBe(true);
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { container } = render(
            <Checkbox type="checkbox" id="chk3" name="agree" value="yes" checked={false} onClick={handleClick} />
        );
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.click(input);
        expect(handleClick).toHaveBeenCalled();
    });
});

describe("Radio", () => {
    test('renders radio input', () => {
        const { container } = render(
            <Radio type="radio" id="r1" name="choice" value="option1" checked={false} />
        );
        expect(container.querySelector('input[type="radio"]')).toBeInTheDocument();
    });

    test('renders selected radio', () => {
        const { container } = render(
            <Radio type="radio" id="r2" name="choice" value="option2" checked={true} />
        );
        const input = container.querySelector('input') as HTMLInputElement;
        expect(input.checked).toBe(true);
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { container } = render(
            <Radio type="radio" id="r3" name="choice" value="option1" checked={false} onClick={handleClick} />
        );
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.click(input);
        expect(handleClick).toHaveBeenCalled();
    });
});

describe("DateInput", () => {
    test('renders input without label when id or name is missing', () => {
        const { container } = render(<DateInput type="date" value={0} />);
        expect(container.querySelector('input')).toBeInTheDocument();
        expect(container.querySelector('label')).not.toBeInTheDocument();
    });

    test('renders input with label when id and name are provided', () => {
        render(<DateInput type="date" id="d1" name="Date field" value={0} />);
        expect(screen.getByLabelText('Date field')).toBeInTheDocument();
    });

    test('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        const { container } = render(<DateInput type="date" value={0} onChange={handleChange} />);
        const input = container.querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: '2024-01-01' } });
        expect(handleChange).toHaveBeenCalledWith('2024-01-01');
    });
});

import { validateJsonForm } from '../../utils/validateJsonForm';

describe('validateJsonForm', () => {
  test('returns invalid for non-object input', () => {
    expect(validateJsonForm(null)).toEqual({ valid: false, error: 'JSON must be an object' });
    expect(validateJsonForm([])).toEqual({ valid: false, error: 'JSON must be an object' });
    expect(validateJsonForm('string')).toEqual({ valid: false, error: 'JSON must be an object' });
    expect(validateJsonForm(42)).toEqual({ valid: false, error: 'JSON must be an object' });
  });

  test('returns invalid when title is missing or empty', () => {
    expect(validateJsonForm({ items: [] })).toEqual({
      valid: false,
      error: 'Form must have a non-empty "title" string field',
    });
    expect(validateJsonForm({ title: '', items: [] })).toEqual({
      valid: false,
      error: 'Form must have a non-empty "title" string field',
    });
    expect(validateJsonForm({ title: 42, items: [] })).toEqual({
      valid: false,
      error: 'Form must have a non-empty "title" string field',
    });
  });

  test('returns invalid when items is missing or not an array', () => {
    expect(validateJsonForm({ title: 'My Form' })).toEqual({
      valid: false,
      error: 'Form must have an "items" array field',
    });
    expect(validateJsonForm({ title: 'My Form', items: {} })).toEqual({
      valid: false,
      error: 'Form must have an "items" array field',
    });
  });

  test('returns invalid when an item has an unsupported type', () => {
    const result = validateJsonForm({ title: 'My Form', items: [{ type: 'unsupported' }] });
    expect(result.valid).toBe(false);
    expect(result.error).toContain('invalid type');
  });

  test('returns invalid when an item is not an object', () => {
    const result = validateJsonForm({ title: 'My Form', items: ['not-an-object'] });
    expect(result.valid).toBe(false);
    expect(result.error).toContain('must be an object');
  });

  test('returns invalid for invalid autocomplete value', () => {
    const result = validateJsonForm({
      title: 'My Form',
      items: [{ type: 'text', value: '' }],
      autocomplete: 'yes',
    });
    expect(result.valid).toBe(false);
    expect(result.error).toContain('"autocomplete"');
  });

  test('returns invalid for invalid method value', () => {
    const result = validateJsonForm({
      title: 'My Form',
      items: [{ type: 'text', value: '' }],
      method: 'put',
    });
    expect(result.valid).toBe(false);
    expect(result.error).toContain('"method"');
  });

  test('returns invalid for invalid enctype value', () => {
    const result = validateJsonForm({
      title: 'My Form',
      items: [{ type: 'text', value: '' }],
      enctype: 'application/json',
    });
    expect(result.valid).toBe(false);
    expect(result.error).toContain('"enctype"');
  });

  test('returns valid for a correct minimal form', () => {
    const result = validateJsonForm({ title: 'My Form', items: [] });
    expect(result).toEqual({ valid: true });
  });

  test('returns valid for a full correct form', () => {
    const result = validateJsonForm({
      title: 'My Form',
      name: 'myForm',
      autocomplete: 'on',
      method: 'post',
      enctype: 'multipart/form-data',
      items: [
        { type: 'text', value: 'hello', name: 'field1' },
        { type: 'button', name: 'submit', value: 'Submit' },
      ],
    });
    expect(result).toEqual({ valid: true });
  });

  test('accepts all valid input types', () => {
    const types = ['number', 'text', 'textarea', 'checkbox', 'date', 'radio', 'label', 'button'];
    for (const type of types) {
      const result = validateJsonForm({
        title: 'My Form',
        items: [{ type, value: '' }],
      });
      expect(result.valid).toBe(true);
    }
  });
});

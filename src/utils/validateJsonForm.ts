import { IForm, Inputs } from 'types';

const VALID_INPUT_TYPES: Inputs[] = [
  'number', 'text', 'textarea', 'checkbox', 'date', 'radio', 'label', 'button',
];

export interface IValidationResult {
  valid: boolean
  error?: string
}

export const validateJsonForm = (json: unknown): IValidationResult => {
  if (typeof json !== 'object' || json === null || Array.isArray(json)) {
    return { valid: false, error: 'JSON must be an object' };
  }

  const obj = json as Record<string, unknown>;

  if (typeof obj.title !== 'string' || obj.title.trim() === '') {
    return { valid: false, error: 'Form must have a non-empty "title" string field' };
  }

  if (!Array.isArray(obj.items)) {
    return { valid: false, error: 'Form must have an "items" array field' };
  }

  for (let i = 0; i < (obj.items as unknown[]).length; i++) {
    const item = (obj.items as unknown[])[i];
    if (typeof item !== 'object' || item === null || Array.isArray(item)) {
      return { valid: false, error: `Item at index ${i} must be an object` };
    }
    const itemObj = item as Record<string, unknown>;
    if (!VALID_INPUT_TYPES.includes(itemObj.type as Inputs)) {
      return {
        valid: false,
        error: `Item at index ${i} has invalid type "${String(itemObj.type)}". ` +
          `Valid types are: ${VALID_INPUT_TYPES.join(', ')}`,
      };
    }
  }

  const form = json as IForm;

  if (form.autocomplete !== undefined && form.autocomplete !== 'on' && form.autocomplete !== 'off') {
    return { valid: false, error: '"autocomplete" must be "on" or "off"' };
  }

  if (form.method !== undefined && !['post', 'get', 'dialog'].includes(form.method)) {
    return { valid: false, error: '"method" must be "post", "get", or "dialog"' };
  }

  if (
    form.enctype !== undefined &&
    !['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'].includes(form.enctype)
  ) {
    return {
      valid: false,
      error: '"enctype" must be "application/x-www-form-urlencoded", "multipart/form-data", or "text/plain"',
    };
  }

  return { valid: true };
};

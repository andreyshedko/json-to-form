import { getLazyComponent } from '../../utils/FormBuilder';

describe("FormBuilder", () => {
    test('load view number input', () => {
        const View = getLazyComponent('number')
        expect(View).toBeDefined();
    });
    test('load view text input', () => {
        const View = getLazyComponent('text')
        expect(View).toBeDefined();
    });
    test('load view text area', () => {
        const View = getLazyComponent('textarea')
        expect(View).toBeDefined();
    });
    test('load view date input', () => {
        const View = getLazyComponent('date')
        expect(View).toBeDefined();
    });
    test('load view button', () => {
        const View = getLazyComponent('button')
        expect(View).toBeDefined();
    });
    test('load view checkbox', () => {
        const View = getLazyComponent('checkbox')
        expect(View).toBeDefined();
    });
    test('load view radio', () => {
        const View = getLazyComponent('radio')
        expect(View).toBeDefined();
    });
    test('returns undefined for unsupported type', () => {
        const View = getLazyComponent('label' as any)
        expect(View).toBeUndefined();
    });
})
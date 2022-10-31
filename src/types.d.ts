interface IInput {
  readonly id?: string
  readonly name?: string
  readonly autocomplete?: string
  readonly placeholder?: string
  readonly readonly?: boolean
}

interface INumberInput extends IInput {
  readonly type: 'number'
  value: number
  readonly max?: number
  readonly min?: number
  readonly step?: number
}

interface ITextInput extends IInput {
  readonly type: 'text'
  value: string
  readonly maxlength?: number
  readonly minlength?: number
  readonly size?: number
}

interface ITextAreaInput extends IInput {
  readonly type: 'textarea'
  value: string
  readonly maxlength?: number
  readonly minlength?: number
  readonly cols?: number
  readonly rows?: number
}

type Checkbox = Omit<IInput, 'autocomplete' | 'placeholder'>;

interface ICheckboxInput extends Checkbox {
  readonly type: 'checkbox'
  value: string
  checked: boolean
}

interface IRadioInput extends Checkbox {
  readonly type: 'radio'
  value: string
  checked: boolean
}

interface IDateInput extends IInput {
  readonly type: 'date'
  value: number
  readonly max?: number
  readonly min?: number
  readonly step?: number
}

interface ILabel {
  readonly for: string
  readonly value: string
  readonly type: 'label'
}

interface IButton {
  readonly id?: string
  readonly type: 'button'
  readonly name: string
  readonly value: string
}

export type Elements = IButton | ICheckboxInput | IDateInput | INumberInput | IRadioInput | ILabel | ITextAreaInput | ITextInput;

export type Inputs = 'number' | 'text' | 'textarea' | 'checkbox' | 'date' | 'radio' | 'label' | 'button';

export interface IForm {

  readonly autocomplete?: 'on' | 'off'
  readonly name?: string
  readonly title: string

  readonly action?: string
  readonly method?: 'post' | 'get' | 'dialog'
  readonly enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

  items: ReadonlyArray<Record<string, unknown> & { type: Inputs }>
}

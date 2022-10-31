import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'jsonStringState',
  default: '{}'
});

export const formState = selector({
  key: 'formState',
  get: ({ get }) => {
    return get(textState);
  }
});

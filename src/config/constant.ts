import { ContactModel } from '../app/types';

export const defaultContactModel = (): ContactModel => ({
  name: '',
  email: '',
  tel: '',
  message: '',
});

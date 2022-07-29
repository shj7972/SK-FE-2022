import { exact, string, number } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  age: number.isRequired,
});

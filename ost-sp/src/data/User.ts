export default interface IUser {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  submited?: boolean;
  selectorId?: number;
  field: string;
}

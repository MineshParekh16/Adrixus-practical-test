export interface IAddEditPost {
  name?: string;
  email?: string;
  password?: string;
  validator?: any;
  editId?: string | null;
  postUser: {
    email: string;
    password: string;
  };
  reidrect?: boolean;
  actions?: any;
}

// main common state
export interface IDataTableState {
  userList: IDataTablePostMethod[];
  projectname: [name1: string, Time: any];
  first: number;
  id: number;
  rows: number;
  classnew?: string;
  products?: string;
  editingRows?: any;
  name?: string;
  date?: string;
  date1?: any;
}

// for axios table data types all
export interface IDataTableStateAxios {
  postList: IDataTablePostMethod[];
  first: number;
  id: number;
  rows: number;
  filter: any;
  globalFilterValue: string;
  price?: number;
  addPost: IDataTablePostMethod;
  delete: [];
  classnew?: string;
}

//for post method and use of datatable main arry
export interface IDataTablePostMethod {
  id: number;
  postId?: number;
  name: string;
}

export interface IDataTablePostMethodnew {
  name1: string;
}

export interface ILifeCycle {
  basicUserName?: {
    id: number;
    name: string;
  }[];
}

export interface IDataTablePostState {
  id: number;
  title: string;
}

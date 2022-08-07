export interface IDashBoardState {
  visibleRight?: boolean;
  visibleLeft?: boolean;
  UserList?: ICmsList[];
  filter?: any;
  rows?: number;
  globalFilterValue?: string;
  checked?: boolean;
  ConfirmDialogvisible?: boolean;
  visible?: boolean;
  show?: boolean;
  showStatusConfirm?: any;
}

export interface ICmsList {
  id: number;
  slug: string;
  page_title: string;
  description?: string;
  status: string;
  meta_keywords?: string;
  meta_description?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: null;
  parent_name?: string;
}

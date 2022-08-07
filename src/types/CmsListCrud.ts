export interface ICmsListData {
  id?: number;
  name?: string;
  username?: string;
  page_title: string;
  slug: string;
  description: string;
  meta_keywords: string;
  meta_description: string;
  status: string;
}

export interface postDataForm {
  [key: string]: ICmsListData;
}

export interface Products {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  slug?: string;
}

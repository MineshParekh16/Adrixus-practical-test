export interface ILoader {
  isLoading: boolean;
}

export interface IApiState {
  userData: IUserData[];
  message: string;
  user_token: string;
}

export interface IUserData {
  access_token: any;
  expires_in: string;
  refresh_token: any;
  token_type: any;
  user_detail: any;
}

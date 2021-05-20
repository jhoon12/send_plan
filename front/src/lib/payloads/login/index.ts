export interface LoginResponse {
  result: string;
  refreshToken: string;
  accessToken: string;
}
export interface RefreshResponse {

  accessToken: string;
}
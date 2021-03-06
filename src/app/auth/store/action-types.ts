export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAILURE = '[Auth] Register Failed',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failed',

  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User Failed',

  UPDATE_CURRENT_USER = '[Auth] Update Current User',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update Current User Success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update Current User Failed',

  LOGOUT = '[Auth] Logout'
}

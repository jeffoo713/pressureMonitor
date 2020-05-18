import { UserActionTypes } from './user.types';;

export const updateCurrentUser = userAuth => ({
  type: UserActionTypes.UPDATE_CURRENT_USER,
  payload: userAuth
})
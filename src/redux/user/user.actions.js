import UserActionTypes from './user.types';;

export const updateCurrentUser = userAuth => ({
  type: UserActionTypes.UPDATE_CURRENT_USER,
  payload: userAuth
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = ({ email, password }) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password }
});

export const signInSuccess = userAuth => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userAuth
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = ({ email, password, displayName }) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: { email, password, displayName }
})

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS
})

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
})

export const checkCurrentUser = () => ({
  type: UserActionTypes.CHECK_CURRENT_USER
})
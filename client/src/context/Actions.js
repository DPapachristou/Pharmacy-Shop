// Action for starting login (sets loading state)
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

// Action when login is successful
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

// Action when login fails
export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// Action for logging out user
export const Logout = () => ({
  type: "LOGOUT",
});

// Action for starting user update
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

// Action when user update is successful
export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

// Action when update fails
export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
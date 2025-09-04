const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        // Start login: reset user, set loading
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        // Login success: store user data, stop loading
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        // Login failed: no user, stop loading, set error
        return {
          user: null,
          isFetching: false,
          error: true,
        };
        case "UPDATE_START":
          // Start update: keep user, set loading
          return {
            ...state,
            isFetching:true
          };
        case "UPDATE_SUCCESS":
          // Update success: merge old user with new data
          return {
            user: { ...state.user, ...action.payload },
            isFetching: false,
            error: false,
          };
        case "UPDATE_FAILURE":
          // Update failed: keep old user, stop loading, set error
          return {
            user: state.user,
            isFetching: false,
            error: true,
          };
      case "LOGOUT":
        // Logout: clear user completely
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
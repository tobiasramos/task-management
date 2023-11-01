export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};



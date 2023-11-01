import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  idUser: null,
  login: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { access, id } = payload;
      id && localStorage.setItem("idUser", JSON.stringify(id));

      return {
        ...state,
        login: access,
        idUser: id,
      };
    case LOGOUT:
      return {
        ...state,
        sections: payload,
      };
    default:
      return {
        ...state,
        idUser: null,
        login: false,
      };
  }
};

export default rootReducer;

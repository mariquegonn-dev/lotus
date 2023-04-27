import UserActionTypes from "./action-types";

const initialState = {
  error: false,
  step: 0,
  sexo: null,
  idade: "",
  altura: "",
  peso: "",
  atividadeFisica: null,
  objetivo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.ERROR:
      return { ...state, error: action.payload };
    case UserActionTypes.STEP:
      return { ...state, step: action.payload };
    case UserActionTypes.SEXO:
      return { ...state, sexo: action.payload };
    case UserActionTypes.IDADE:
      return { ...state, idade: action.payload };
    case UserActionTypes.ALTURA:
      return { ...state, altura: action.payload };
    case UserActionTypes.PESO:
      return { ...state, peso: action.payload };
    case UserActionTypes.ATV_FISICA:
      return { ...state, atividadeFisica: action.payload };
    case UserActionTypes.OBJETIVO:
      return { ...state, objetivo: action.payload };
    default:
      return state;
  }
};

export default userReducer;

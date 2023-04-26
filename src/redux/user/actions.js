import UserActionTypes from "./action-types";

export const stepUser = (payload) => ({
  type: UserActionTypes.STEP,
  payload,
});

export const sexoUser = (payload) => ({
  type: UserActionTypes.SEXO,
  payload,
});

export const idadeUser = (payload) => ({
  type: UserActionTypes.IDADE,
  payload,
});

export const alturaUser = (payload) => ({
  type: UserActionTypes.ALTURA,
  payload,
});

export const pesoUser = (payload) => ({
  type: UserActionTypes.PESO,
  payload,
});

export const atvFisicaUser = (payload) => ({
  type: UserActionTypes.ATV_FISICA,
  payload,
});

export const objetivoUser = (payload) => ({
  type: UserActionTypes.OBJETIVO,
  payload,
});

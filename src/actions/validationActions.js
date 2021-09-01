import {
  VALIDATION_FORM,
  VALIDATION_FORM_SUCCESS,
  VALIDATION_FORM_ERROR,
} from "../types/types";

export const validationFormAction = () => {
  return (dispatch) => {
    dispatch(startValidation());
  };
};

export const startValidation = () => {
  return {
    type: VALIDATION_FORM,
  };
};

export const validationSuccess = () => {
  return {
    type: VALIDATION_FORM_SUCCESS,
  };
};

export const validationError = () => {
  return {
    type: VALIDATION_FORM_ERROR,
  };
};

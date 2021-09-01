import {
  VALIDATION_FORM,
  VALIDATION_FORM_SUCCESS,
  VALIDATION_FORM_ERROR,
} from "../types/types";

// State inicial

const initialState = {
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VALIDATION_FORM:
      return { ...state, error: null };

    case VALIDATION_FORM_SUCCESS:
      return { ...state, error: null };

    case VALIDATION_FORM_ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
  START_EDITING_PRODUCT,
  PRODUCT_EDITED_SUCCESS,
  PRODUCT_EDITED_ERROR,
} from "../types/types";

//cada reducer tiene su propio state

const initialState = {
  products: [],
  error: null,
  loading: false,
  product: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        error: null,
        loading: false,
        product: {},
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        products: [...state.products, action.payload],
        product: {},
      };

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
        product: {},
      };

    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
        product: {},
      };

    case DOWNLOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        products: [],
        product: {},
      };

    case GET_PRODUCT_DELETE:
      return {
        ...state,
        error: null,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        error: null,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case PRODUCT_DELETE_ERROR:
      return {
        ...state,
        error: true,
      };

    case GET_PRODUCT_EDIT:
      return { ...state, error: null };

    case PRODUCT_EDIT_SUCCESS:
      return {
        ...state,
        error: null,
        product: action.payload,
      };
    case PRODUCT_EDIT_ERROR:
      return {
        ...state,
        error: true,
      };

    case START_EDITING_PRODUCT:
      return {
        ...state,
        error: null,
      };

    case PRODUCT_EDITED_SUCCESS:
      return {
        ...state,
        error: null,
        product: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };

    case PRODUCT_EDITED_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}

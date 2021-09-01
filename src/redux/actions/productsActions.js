import {
  //add
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,

  //get
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,

  //delete
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,

  //edit
  GET_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,

  //start edit
  START_EDITING_PRODUCT,
  PRODUCT_EDITED_SUCCESS,
  PRODUCT_EDITED_ERROR,
} from "../types/types";

import clientAxios from "../../config/axios";

// Crear un nuevo producto - Función Principal

export function createNewProductAction(product) {
  return (dispatch) => {
    dispatch(newProduct());

    //Insertar en la API
    clientAxios
      .post("/libros", product)
      .then((response) => {
        console.log(response);
        //se ejecuta si se inserta correctamente
        dispatch(newProductSuccess(product));
      })
      .catch((error) => {
        console.log(error);
        dispatch(newProductError(error));
      });
  };
}

export const newProduct = () => ({ type: ADD_PRODUCT });
export const newProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});
export const newProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

//Obtener listado de productos, consultar API

export function getProductsAction() {
  return (dispatch) => {
    //Comenzar la carga
    dispatch(getProductStart());
    //Consultar la api

    clientAxios
      .get("/libros")
      .then((response) => {
        const { data } = response;
        dispatch(downloadProductsSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(downloadProductsError(error));
      });
  };
}

export const getProductStart = () => ({
  type: START_DOWNLOAD_PRODUCTS,
});

export const downloadProductsSuccess = (response) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: response,
});

export const downloadProductsError = (error) => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  error: error,
});

// Función que elimina un producto en específico.

export function deleteProductAction(id) {
  return (dispatch) => {
    dispatch(getProductDelete());

    // Eliminar en la API

    clientAxios
      .delete(`/libros/${id}`)
      .then((respuesta) => {
        //console.log(respuesta);
        dispatch(deleteProductSuccess(id));
      })
      .catch((error) => {
        //console.log(error);
        dispatch(deleteProductError());
      });
  };
}

export const getProductDelete = () => ({
  type: GET_PRODUCT_DELETE,
});

export const deleteProductSuccess = (id) => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: id,
});

export const deleteProductError = () => ({
  type: PRODUCT_DELETE_ERROR,
});

// Obtener el producto a editar

export function getProductEditAction(id) {
  return (dispatch) => {
    dispatch(getProductAction());
    // Obtener producto de la API

    clientAxios
      .get(`/libros/${id}`)
      .then((response) => {
        //console.log(respuesta.data);
        dispatch(getProductEditSuccess(response.data));
      })
      .catch((error) => {
        //console.log(error);
        dispatch(getProductEditError());
      });
  };
}

export const getProductAction = () => ({
  type: GET_PRODUCT_EDIT,
});

export const getProductEditSuccess = (product) => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product,
});

export const getProductEditError = () => ({
  type: PRODUCT_EDIT_ERROR,
});

// Modifica un producto en la api y state

export function editProductAction(product) {
  return (dispatch) => {
    dispatch(startEditingProduct());
    // Consultar la API
    clientAxios
      .put(`/libros/${product.id}`, product)
      .then((response) => {
        //console.log(respuesta);
        dispatch(editProductSuccess(response.data));
      })
      .catch((error) => {
        // console.log(error);
        dispatch(editProductError());
      });
  };
}

export const startEditingProduct = () => ({
  type: START_EDITING_PRODUCT,
});

export const editProductSuccess = (product) => ({
  type: PRODUCT_EDITED_SUCCESS,
  payload: product,
});

export const editProductError = () => ({
  type: PRODUCT_EDITED_ERROR,
});

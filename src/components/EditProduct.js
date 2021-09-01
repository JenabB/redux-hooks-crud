import React, { useEffect, useRef } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getProductEditAction,
  editProductAction,
} from "../actions/productsActions";
import {
  validationFormAction,
  validationSuccess,
  validationError,
} from "../actions/validationActions";

import Swal from "sweetalert2";

export default function EditProduct() {
  //Crear los ref
  const nameRef = useRef("");
  const priceRef = useRef("");

  //Dispatch accion principal
  const dispatch = useDispatch();

  const validationForm = () => dispatch(validationFormAction());
  const successValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validationError());

  const editProduct = (product) => dispatch(editProductAction(product));

  const match = useRouteMatch();
  const history = useHistory();
  const { id } = match.params;

  useEffect(() => {
    dispatch(getProductEditAction(id));
  }, [dispatch, id]);

  // Acceder al State

  const product = useSelector((state) => state.products.product);
  const error = useSelector((state) => state.products.error);

  if (!product) return "loading...";

  const submiteditProduct = (e) => {
    e.preventDefault();

    //Validar el formulario
    validationForm();
    if (
      nameRef.current.value.trim() === "" ||
      priceRef.current.value.trim() === ""
    ) {
      errorValidation();
      return;
    }
    // No hay error

    successValidation();
    //Guardar los cambios
    editProduct({
      id: id,
      name: nameRef.current.value,
      price: priceRef.current.value,
    });

    Swal.fire("Stored", "The product was updated successfully", "success");

    //Redireccionar
    history.push("/");
  };

  return error ? (
    <div className="font-weight-bold alert alert-danger text-center mt-4">
      There was a mistake, try again.
    </div>
  ) : (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Edit product</h2>
              <form onSubmit={submiteditProduct}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    defaultValue={product.nombre}
                    ref={nameRef}
                  />
                </div>
                <div className="form-group">
                  <label>Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                    defaultValue={product.precio}
                    ref={priceRef}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

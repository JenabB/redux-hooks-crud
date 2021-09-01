import React, { useState } from "react";

//React Router
import { useHistory } from "react-router-dom";

//Redux
import { createNewProductAction } from "../actions/productsActions";
import {
  validationFormAction,
  validationSuccess,
  validationError,
} from "../actions/validationActions";
import { useDispatch, useSelector } from "react-redux";

const NewProduct = () => {
  //Router

  let history = useHistory();

  // State
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //create new product
  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(createNewProductAction(product));

  const valiationForm = () => dispatch(validationFormAction());
  const successValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validationError());

  //get error state
  const error = useSelector((state) => state.error.error);

  //Add new product handler
  const addNewProduct = (e) => {
    e.preventDefault();
    //Validation form
    valiationForm();

    //Prevent empty form
    if (name.trim() === "" || price.trim() === "") {
      errorValidation();
      return;
    }
    //success validation
    successValidation();

    //add product
    addProduct({
      name,
      price,
    });

    //redirect
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">Add New Book</h2>
            <form onSubmit={addNewProduct}>
              <div className="form-group">
                <label>Book Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="book name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Book Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="book price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                All fields are required
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;

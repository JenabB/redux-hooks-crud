import React, { useEffect } from "react";
import Product from "./Product";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  //Ejecutar acción

  const dispatch = useDispatch();

  useEffect(() => {
    //Obtener productos
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
  }, [dispatch]);

  //Acceder al State

  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const products = useSelector((state) => state.products.products);

  return (
    <>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          There was a mistake
        </div>
      ) : null}
      <h2 className="text-center my-5">Products List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      {loading ? "Loading..." : null}
    </>
  );
};

export default Products;

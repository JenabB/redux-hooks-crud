import React from "react";
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../redux/actions/productsActions";
import Swal from "sweetalert2";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const confirmDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "A deleted product cannot be recovered",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "DElete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted", "product deleted", "success");
        dispatch(deleteProductAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{product.nombre}</td>
      <td>
        <span className="font-weight-bold">${product.precio}</span>
      </td>
      <td className=" acciones">
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L43RjDIsxhoLpzhBZbvrBRipEZ1hzpUI4dBEqpnrf8xhHyJ2UgcGk8bktG1a0UMIcfRUP7PYxbLzgAv5YZUp6Vf00xSG6s8n1"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://powertrain.onrender.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col justify-center items-center py-9 px-4">
      <div className="card w-full md:w-3/4 max-w-md bg-secondary text-base-100 shadow-xl my-12">
        <div className="card-body flex flex-col">
          <h2 className="card-title">Please Pay for "{order.productName}"</h2>
          <p>Please pay: ${order.price}</p>
          <p>Product id: {order.productId}</p>
          <p>Quantity: {order.quantity} units</p>
        </div>
      </div>
      <div className="card w-full md:w-3/4 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

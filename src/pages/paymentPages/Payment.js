import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../componentes/Common/Loading";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51L43RjDIsxhoLpzhBZbvrBRipEZ1hzpUI4dBEqpnrf8xhHyJ2UgcGk8bktG1a0UMIcfRUP7PYxbLzgAv5YZUp6Vf00xSG6s8n1"
);

const Payment = () => {
  const { id } = useParams();
  const course = useSelector((state) => state.course);

  if (course.isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center py-9 px-4">
      <div className="card w-full md:w-3/4 max-w-md bg-secondary text-base-100 shadow-xl my-12">
        <div className="card-body flex flex-col">
          <h2 className="card-title">
            Please Pay for "{course?.data?.course?.title}"
          </h2>
          <p>Please pay: ${course?.data?.course?.offerPrice}</p>
          <p>Product id: {course?.data?.course?._id}</p>
        </div>
      </div>
      <div className="card w-full md:w-3/4 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={course?.data?.course} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../componentes/Common/Loading";
import { useSelector } from "react-redux";
import Header from "../frontPages/Header";
import "../../styles/pages/FrontPage/Payment/_index.scss";
import Footer from "../../componentes/Footer/Footer";

const stripePromise = loadStripe(
  "pk_test_51L43RjDIsxhoLpzhBZbvrBRipEZ1hzpUI4dBEqpnrf8xhHyJ2UgcGk8bktG1a0UMIcfRUP7PYxbLzgAv5YZUp6Vf00xSG6s8n1"
);

const Payment = () => {
  const { id } = useParams();
  const course = useSelector((state) => state.course);

  if (course.isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="payment__main__container">
        <div className="payment__container">
          <div className="service__details">
            <h2 className="service__title">{course?.data?.course?.title}</h2>
            <span className="service__price">
              Bill: ${course?.data?.course?.offerPrice}
            </span>
            <span className="service__id">
              Product id: {course?.data?.course?._id}
            </span>
          </div>
        </div>
        {!stripePromise ? (
          <Loading />
        ) : (
          <div className="payment__card__main__container">
            <div className="payment__card__body">
              <Elements className="element" stripe={stripePromise}>
                <CheckoutForm order={course?.data?.course} />
              </Elements>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Payment;

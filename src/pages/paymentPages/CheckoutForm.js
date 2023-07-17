import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { makePayment } from "../../features/slices/paymentSlice";
import { addTransaction } from "../../features/slices/transactionSlice";
import { createMyCourse } from "../../features/slices/myCoursesSlice";
import "../../styles/pages/FrontPage/Payment/_index.scss";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const dispatch = useDispatch();
  const paymentDetails = useSelector((state) => state.payment.data);
  const userInfo = useSelector((state) => state.userInfo?.data);

  let newCourseOutLine = [];
  order?.courseOutline?.map(
    (c) => (newCourseOutLine = [...newCourseOutLine, { ...c, status: false }])
  );

  // const { _id, price, email, name } = order;

  useEffect(() => {
    console.log("oooo", order);
    dispatch(
      makePayment({
        price: order?.offerPrice,
      })
    );
  }, []);

  useEffect(() => {
    if (paymentDetails) {
      console.log(paymentDetails);
      setClientSecret(paymentDetails.clientSecret);
    }
  }, [paymentDetails.clientSecret, paymentDetails]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userInfo?.name,
            email: userInfo?.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
      const transactionDetails = {
        course_id: order?._id,
        email: userInfo?.email,
        author: order?.authorEmail,
        title: order?.title,
        amount: order?.offerProce,
        status: true,
        transaction_id: paymentIntent.id,
      };

      const myCourseDetails = {
        course_id: order?._id,
        email: userInfo?.email,
        title: order?.title,
        coverImg: order?.coverImg,
        author: order?.author,
        avatar: order?.avatar,
        published: order?.published,
        lastUpdate: order?.lastUpdate,
        enrolled: order?.enrolled,
        totalLessons: order?.totalLessons,
        duration: order?.duration,
        courseOutline: newCourseOutLine,
      };
      // add transaction
      dispatch(addTransaction(transactionDetails));
      // update user's myCourse collection
      dispatch(createMyCourse(myCourseDetails));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="payment__form">
        <label htmlFor="card__element">Card Details</label>
        <CardElement
          className="card__element"
          id="card__element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="error__text">{cardError}</p>}
      {success && (
        <div className="success__container">
          <p className="success__text">{success} </p>
          <p className="transaction">
            Your transaction Id:{" "}
            <span className="transaction__id">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

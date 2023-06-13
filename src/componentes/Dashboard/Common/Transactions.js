import React from "react";

const Transactions = () => {
  return (
    <>
      <div className="transactions__container">
        <div className="container__heading">
          <h2>Your Transactions</h2>
        </div>
        <div className="transaction">
          <div className="icon__container">Icon</div>
          <div className="details__container">
            <h4>Complete Java Course</h4>
            <span>21 Jun 2022</span>
          </div>
          <div className="amount__container">
            <h4>-$245</h4>
          </div>
        </div>
        <div className="transaction">
          <div className="icon__container">Icon</div>
          <div className="details__container">
            <h4>Complete Java Course</h4>
            <span>21 Jun 2022</span>
          </div>
          <div className="amount__container">
            <h4>-$245</h4>
          </div>
        </div>
        <div className="transaction">
          <div className="icon__container">Icon</div>
          <div className="details__container">
            <h4>Complete Java Course</h4>
            <span>21 Jun 2022</span>
          </div>
          <div className="amount__container">
            <h4>-$245</h4>
          </div>
        </div>
        <div className="view__all__btn__container">
          <button>View all</button>
        </div>
      </div>
    </>
  );
};

export default Transactions;

import React from "react";
import CustomIcon from "../../Common/CustomIcon";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Complete Java Course",
      date: "21 Jun 2022",
      amount: 245,
    },
    {
      title: "Complete Java Course",
      date: "21 Jun 2022",
      amount: 245,
    },
    {
      title: "Complete Java Course",
      date: "21 Jun 2022",
      amount: 245,
    },
  ];

  return (
    <>
      <div className="transactions__container">
        <div className="container__heading">
          <h2>Your Transactions</h2>
        </div>

        {data.map((d, i) => (
          <div className="transaction" key={i}>
            <div className="icon__container">
              <CustomIcon className="transacttion__history">
                <GiPayMoney />
              </CustomIcon>
            </div>
            <div className="details__container">
              <h4>Complete Java Course</h4>
              <span>21 Jun 2022</span>
            </div>
            <div className="amount__container">
              <h4>-$245</h4>
            </div>
          </div>
        ))}

        <div className="view__all__btn__container">
          <button
            className="btn__view__all__arrow"
            onClick={() => navigate("/dashboard/payment-history")}
          >
            View all
            <CustomIcon className="btn__arrow">
              <AiOutlineArrowRight />
            </CustomIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Transactions;

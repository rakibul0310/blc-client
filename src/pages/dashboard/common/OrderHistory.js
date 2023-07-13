import React from "react";
import CustomTable from "../../../componentes/Common/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransactionHistory } from "../../../features/slices/transactionSlice";
import { useState } from "react";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const [tData, setTData] = useState([]);
  const transactionHistory = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(getTransactionHistory());
  }, []);

  useEffect(() => {
    function createData(id, title, amount, date, transaction_id, status) {
      return {
        id,
        title,
        amount,
        date,
        transaction_id,
        status,
      };
    }

    const tableDatas = (data) => {
      return data?.map((d, i) =>
        createData(
          i + 1,
          d.title,
          "$" + parseFloat(d?.amount).toFixed(3),
          new Date(d.date).toDateString(),
          d.transaction_id,
          <span
            style={{
              borderRadius: "50px",
              padding: "5px 8px",
              fontSize: "13px",
              textTransform: "capitalize",
              backgroundColor:
                d.status === "pending"
                  ? "rgba(255,189,90,.2)"
                  : d.status === "success"
                  ? "rgba(28,213,174,.2)"
                  : "rgba(247,79,117,.2)",
              color:
                d.status === "pending"
                  ? "#ffc107"
                  : d.status === "success"
                  ? "#38cab3"
                  : "#f74f75",
            }}
          >
            {d.status && "success"}
          </span>
        )
      );
    };

    if (transactionHistory?.data?.length > 0) {
      const processedData = tableDatas(transactionHistory?.data);
      setTData(processedData);
    }
  }, [transactionHistory?.data]);

  const tableHeades = [
    { id: "id", label: "Sr.", minWidth: 20 },
    { id: "title", label: "Title", minWidth: 100 },
    {
      id: "amount",
      label: "Amount",
      minWidth: 120,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 110,
    },
    {
      id: "transaction_id",
      label: "Transaction ID",
      minWidth: 100,
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
    },
  ];

  return (
    <div className="payment__history__container">
      <div className="heading">
        <h3>All Transactions</h3>
      </div>
      <div className="payment__history__table__container">
        <CustomTable
          tableHeades={tableHeades}
          tableDatas={tData}
          perPageShow={5}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default OrderHistory;

import React, { useEffect } from "react";
import CustomTable from "../../../../componentes/Common/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { getSupportHistory } from "../../../../features/slices/supportSlice";
import { useState } from "react";
import Loading from "../../../../componentes/Common/Loading";

const TicketHistory = () => {
  const [processedData, setProcessedData] = useState([]);
  const dispatch = useDispatch();
  const support = useSelector((state) => state.support);

  useEffect(() => {
    dispatch(getSupportHistory());
  }, []);

  useEffect(() => {
    function createData(id, email, purpose, question, date, tId) {
      return {
        id,
        email,
        purpose,
        question,
        date,
        track_id: tId,
      };
    }

    const tableDatas = (data) => {
      return data?.map((d, i) =>
        createData(
          i + 1,
          d?.email,
          d?.purpose,
          d?.question?.length > 30
            ? d?.question?.splite(0, 25) + "..."
            : d?.question,
          new Date(d?.date).toDateString(),
          d?._id
        )
      );
    };

    if (support?.data?.length > 0) {
      const data = tableDatas(support?.data);
      setProcessedData(data);
    }
  }, [support?.data]);

  const tableHeades = [
    { id: "id", label: "Sr.", minWidth: 20 },
    { id: "email", label: "Email", minWidth: 100 },
    {
      id: "purpose",
      label: "Purpose",
      minWidth: 120,
    },
    {
      id: "question",
      label: "Question",
      minWidth: 120,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 110,
    },
    {
      id: "track_id",
      label: "Track ID",
      minWidth: 100,
    },
  ];

  if (support?.isLoading) {
    return <Loading />;
  }
  return (
    <div className="payment__history__container">
      <div className="heading">
        <h3>All Support Tickets</h3>
      </div>
      <div className="payment__history__table__container">
        <CustomTable
          tableHeades={tableHeades}
          tableDatas={processedData}
          perPageShow={5}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default TicketHistory;

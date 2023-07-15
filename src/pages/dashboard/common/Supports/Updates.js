import React from "react";
import CustomTable from "../../../../componentes/Common/CustomTable";
import Loading from "../../../../componentes/Common/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUpdates } from "../../../../features/slices/updateSlice";

const Updates = () => {
  const [processedData, setProcessedData] = useState([]);
  const dispatch = useDispatch();
  const updates = useSelector((state) => state.updates);

  useEffect(() => {
    dispatch(getUpdates());
  }, []);

  useEffect(() => {
    function createData(id, title, description, date, tId) {
      return {
        id,
        title,
        description,
        date,
        release: tId,
      };
    }

    const tableDatas = (data) => {
      return data?.map((d, i) =>
        createData(
          i + 1,
          d?.title,
          d?.description?.length > 30
            ? d?.description?.splite(0, 25) + "..."
            : d?.description,
          new Date(d?.date).toDateString(),
          d?._id
        )
      );
    };

    if (updates?.data?.length > 0) {
      const data = tableDatas(updates?.data);
      setProcessedData(data);
    }
  }, [updates?.data]);

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

  if (updates?.isLoading) {
    return <Loading />;
  }

  return (
    <div className="payment__history__container">
      <div className="heading">
        <h3>Updates</h3>
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

export default Updates;

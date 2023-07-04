import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CustomTable = ({
  tableHeades,
  tableDatas,
  perPageShow,
  showPagination,
}) => {
  const [pageShow, setPageShow] = useSearchParams();
  const pageTerm = pageShow.get("newPage") || "";
  // console.log(tableHeades);
  // console.log(tableDatas);
  // console.log(perPageShow);
  //   const defaultValues = {
  //     pageShow: parseInt(pageTerm) ? parseInt(pageTerm) : 1,
  //   };

  const [page, setPage] = useState(parseInt(pageTerm) ? parseInt(pageTerm) : 0);

  //   const [searchValues, setSearchValues] = useReducer(
  //     (state, action) => ({ ...state, ...action }),
  //     defaultValues
  //   );

  //   const [rowsPerPage, setRowsPerPage] = useState(perPageShow);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    // setSearchValues({ pageShow: newPage });
    setPageShow({ newPage });
  };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     // setPage(0);
  //     // setPage(searchValues);
  //   };

  const maxPaginateCount = Math.ceil(tableDatas.length / perPageShow);

  return (
    <div className="custom__table__outer__wrapper">
      <div className="custom__table__wrapper">
        <table className="custom__table">
          <thead>
            <tr>
              {/* Table Header */}
              {tableHeades &&
                tableHeades.map((heade, idx) => (
                  <th key={idx}>{heade.label}</th>
                ))}
            </tr>
          </thead>
          {/* Table Data */}
          <tbody>
            {tableDatas
              ?.slice(page * perPageShow, page * perPageShow + perPageShow)
              ?.map((data, idx) => (
                <tr key={idx}>
                  {tableHeades.map((head, idy) => {
                    const value = data[head.id];
                    return <td key={idy}>{value}</td>;
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Table Pagination */}
      <div className="custom__table__pagination__wrapper">
        {showPagination &&
          tableDatas
            .slice(
              page + 1 - 5 > 0 ? page + 1 - 5 : 0,
              5 < maxPaginateCount ? 5 : maxPaginateCount
            )
            .map((data, idx) => (
              <button
                key={idx}
                onClick={() => handleChangePage(idx)}
                disabled={page === idx && true}
                className={`pagination__btn ${page === idx ? "disabled" : ""}`}
              >
                {idx + 1}
              </button>
            ))}
      </div>
    </div>
  );
};

export default CustomTable;

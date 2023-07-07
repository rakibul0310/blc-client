import React from "react";
import CustomTable from "../../../../componentes/Common/CustomTable";
import {
  tableDatas,
  tableHeades,
} from "../../../../utils/tableAssets/tableAssets";

const Updates = () => {
  return (
    <div className="payment__history__container">
      <div className="heading">
        <h3>All Transactions</h3>
      </div>
      <div className="payment__history__table__container">
        <CustomTable
          tableHeades={tableHeades}
          tableDatas={tableDatas}
          perPageShow={5}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default Updates;

import React from "react";
import CustomTable from "../../../componentes/Common/CustomTable";
import {
  tableDatas,
  tableHeades,
} from "../../../utils/tableAssets/tableAssets";

const OrderHistory = () => {
  return (
    <div className="payment__history__container">
      <CustomTable
        tableHeades={tableHeades}
        tableDatas={tableDatas}
        perPageShow={5}
        showPagination={true}
      />
    </div>
  );
};

export default OrderHistory;

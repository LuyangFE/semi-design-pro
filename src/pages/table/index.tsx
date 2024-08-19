import React, { useState } from "react";
import { Table } from "@douyinfe/semi-ui";
import { columns } from "./columns";
import useService from "@/src/hooks/useService";
import { getTableData } from "@/src/services/table";

const TablePage = () => {
  const [page, setPage] = useState(1);
  const [{ data, loading }] = useService(() => getTableData({ page, pageSize: 10 }));

  return (
    <div className="px-8 py-6">
      <Table
        loading={loading}
        columns={columns}
        dataSource={data?.data}
        pagination={false}
      />
    </div>
  );
};

export default TablePage;

import React, { memo } from "react";
import { Table } from "antd";

export const Cate = memo(() => {
  return (
    <div>
      <p className="h2">Category</p>
      <Table
        dataSource={[
          {
            a: "1",
            id: "hi",
          },
        ]}
        columns={[
          {
            title: "Id",
            dataIndex: "id",
            key: "id",
          },
        ]}
      />
    </div>
  );
});

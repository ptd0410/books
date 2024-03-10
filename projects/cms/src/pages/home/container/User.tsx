import { userModel } from "@@models";
import { cvAntdCol } from "@utils";
import { Table, TableColumnsType } from "antd";
import React, { memo } from "react";

export const User = memo(() => {
  return (
    <div>
      <p className="h2">Users</p>
      <Table columns={cvAntdCol(["role", "full-name"])} />
    </div>
  );
});

// cvAntdCol(["role", "full name"])

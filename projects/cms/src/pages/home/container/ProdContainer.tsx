import { getProdList } from "@@api";
import { AddBtn } from "@@components";
import { useHandle } from "@@hooks";
import { cvAntdCol } from "@utils";
import { Table } from "antd";
import { memo, useCallback, useEffect, useState } from "react";

const Prod = memo(() => {
  const { onError } = useHandle();
  const [prodList, setProdList] = useState<Mg<IProd>[]>([]);

  const handleGetList = useCallback(async () => {
    try {
      const res = await getProdList();
      setProdList(res);
      console.log("resss", res);
    } catch (error) {
      onError(error);
      console.log("Err getProdList", error);
    }
  }, []);

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="h2">Product</p>
        <AddBtn text="Add Production" onClick={() => {}} />
      </div>
      <Table
        columns={cvAntdCol(["_id", "name", "price", "quantỉy"])}
        dataSource={prodList}
      />
    </div>
  );
});

export default Prod;

import useQuery from "@@hooks/useQuery";
import { useProd } from "@pages/home/useHome";
import React, { useEffect } from "react";

const Detail = () => {
  const { params } = useQuery();
  const { prodDetail, getProdDetail } = useProd();

  const id = params?.id || "";

  console.log("detail", prodDetail);

  useEffect(() => {
    getProdDetail(id);
  }, []);

  return <div>detail</div>;
};

export default React.memo(Detail);

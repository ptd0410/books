import { useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const onErr = (err) => {
    console.log("err", err);
  };

  return {
    loading,
    setLoading,
    onErr,
  };
};

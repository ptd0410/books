import { useCallback, useState } from "react";

export const useHandle = () => {
  const [loading, setloading] = useState(false);

  const onError = useCallback((error) => {
    console.log("Err", error);
  }, []);

  return {
    loading,
    setloading,
    onError,
  };
};

export interface IUseHandle {
  loading: boolean;
  setloading(boo: boolean): void;
  onError(err: any): void;
}

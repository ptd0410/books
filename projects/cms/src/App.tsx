import { apiClient } from "@api";
import "./index.css";
import { useEffect } from "react";

function App() {
  const click = async () => {
    try {
      const res = await apiClient.post(`/auth/login`, {
        username: "hihi",
        password: "hii",
      });
      console.log("ressssss", res);
    } catch (error) {
      console.log("err api", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={click}>click</button>
    </>
  );
}

export default App;

const createMongooseModel = (data) => {
  const res: any = {};
  Object.entries(data).map(([key, value]) => {
    if (typeof value === "string") {
      res[key] = String;
    } else if (typeof value === "number") {
      res[key] = Number;
    }
  });

  return res;
};

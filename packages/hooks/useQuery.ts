import { useLocation, useNavigate } from "react-router-dom";

export default function useQuery() {
  const nav = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search || window.location.search);
  const params: any = {};
  search.forEach((value, key) => {
    params[key] = value;
  });

  const paramsNav = (path, data) => {
    const query = new URLSearchParams(data);
    nav(`${path}?${query}`);
  };

  return {
    params,
    paramsNav,
  };
}

import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  return <div>{searchParams.get("name")}</div>;
};
export default Search;

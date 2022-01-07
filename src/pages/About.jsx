import queryString from "query-string";

export default function About(props) {
  const seachParams = props.location.search;
  console.log(seachParams);
  // const obj = new URLSearchParams(seachParams);
  // console.log(obj.get("name"));
  const query = queryString.parse(seachParams);
  console.log(query);
  return (
    <div>
      <h2>About 페이지입니다.</h2>
      {query.name && <p>name은 {query.name}입니다.</p>}
    </div>
  );
}

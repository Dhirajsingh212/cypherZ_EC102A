import tmpData from "./MockData";

export async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  sessionStorage.setItem("data", JSON.stringify(data));
  return data;
}

export default function getData() {
  const data = sessionStorage.getItem("data")
    ? JSON.parse(sessionStorage.getItem("data"))
    : tmpData;
  return data;
}

export function SearchData(query) {
  let data = sessionStorage.getItem("data")
    ? JSON.parse(sessionStorage.getItem("data"))
    : tmpData;

  data = data.filter((item) => {
    return item.title.toLowerCase().includes(query.trim().toLowerCase());
  });
  return data;
}

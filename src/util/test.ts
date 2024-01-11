import { CONTENT } from "./DATA";

const filterData = CONTENT.filter((item) =>
  item.categories.map((category) => category.toLowerCase().includes(category))
);

console.log(filterData);


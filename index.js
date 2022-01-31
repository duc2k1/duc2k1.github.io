const _ = require("lodash");

const myList = [
  "Water",
  "Coffee",
  "Tea",
  "Milk",
  "Sugar",
  "Salt",
  "Baking Powder",
  "Baking Soda",
  "Baking Soda",
  "Baking Soda",
  "Eggs",
  "Butter",
  "Yeast",
];

const myNewArray = _.sumBy(myList, (item) => {
  return item.length;
});

console.log(myNewArray);

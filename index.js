/* PROBLEM STATEMENTS:
1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
{
  "TV": 2,
  "AC": 2,
  "FAN": 1
} */

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

let obj = {};
function result(listOfProducts) {
  for (let i = 0; i < listOfProducts.length; i++) {
    if (obj[listOfProducts[i].productName] == undefined) {
      obj[listOfProducts[i].productName] = 1;
    } else {
      obj[listOfProducts[i].productName] += 1;
    }
  }
  return obj;
}

console.log(result(listOfProducts));

/* 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]


   */

function getUniquePrducts() {
  let arr = [];
  listOfProducts.reduce(function (res, value) {
    if (!res[value.productName]) {
      res[value.productName] = {
        productName: value.productName,
        quantity: 0,
        description: value.description,
      };
      arr.push(res[value.productName]);
    }
    res[value.productName].quantity += value.quantity;
    return res;
  }, {});
  return arr;
}
console.log(getUniquePrducts());

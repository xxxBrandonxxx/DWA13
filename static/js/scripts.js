// Import data from external files
import { names, provinces } from "./data/datas.js";
import { products } from "./data/products.js";

// Use forEach to console log each name
console.log("Use forEach to console log name ");
names.forEach((name) => console.log(name));

// Console log each name with a matching province
console.log("console log each name with a matching province");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Map over all province names and turn string to uppercase
console.log("map over all province names and turn string to uppercase");
const provincesUppercase = provinces.map((province) => province.toUpperCase());
console.log(provincesUppercase);

// Create new array result should be: [6, 9, 11, 5, 8, 7, 7]
console.log("Create new array result should be: [6, 9, 11, 5, 8, 7, 7]");
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Use sort() to sort all provinces alphabetically
console.log("Using toSorted to sort all provinces alphabetically.");
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Remove all provinces that have the word Cape in them. final value should be 3
console.log("remove all provinces that have the word Cape in them. final value should be 3");
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

// Check if name contains an S character, result should be [true, true, false, true, true, false]
console.log("name contains an S character result should be [true, true, false, true, true, false]");
const hasS = names.map((name) => name.includes("S"));
console.log(hasS);

// Using reduce, turn the above into an object.
console.log("Using reduce, turn the above into an object.");
const provinceByNames = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceByNames);

// Log each product name to the console
console.log("each product name logged to the console.");
products.forEach((product) => console.log(product.product));

// Filter products longer than 5 characters
console.log("filter products longer than 5 characters");
const filteredProducts = products.filter(
  (product) => product.product.length <= 5
);
console.log(filteredProducts);

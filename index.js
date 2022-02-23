import _ from "lodash";
// exampe of lodash
const string = "hello world !";
// uppercase first letter
const result = _.upperFirst(string);
console.log("🚀 ~ result", result);
// uppercase all letters
const result2 = _.upperCase(string);
console.log("🚀 ~ result2", result2);
// get first letter
const result3 = _.head(string);
console.log("🚀 ~ result3", result3);
// shuffle string
const result4 = _.shuffle(string);
console.log("🚀 ~ result4", result4);
// get last letter
const result5 = _.last(string);
console.log("🚀 ~ result5", result5);
// split string
const result6 = _.split(string, " ");
console.log("🚀 ~ result6", result6);
// delete last letter
const result7 = _.dropRight(string, 1);
console.log("🚀 ~ result7", result7);
// delete first letter
const result8 = _.drop(string, 1);
console.log("🚀 ~ result8", result8);

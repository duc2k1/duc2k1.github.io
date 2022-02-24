//example catch error
const error = new Error("error");
try {
  throw error;
} catch (err) {
  console.log(err);
}
console.log(error);

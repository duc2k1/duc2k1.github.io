const moment = require("moment-timezone");
console.log(moment().fromNow());
console.log("hello");
// random  date from now
console.log(
  moment()
    .add(Math.floor(Math.random() * 100), "days")
    .format("YYYY-MM-DD")
);

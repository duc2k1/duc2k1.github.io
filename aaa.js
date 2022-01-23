const moment = require("moment-timezone");
console.log(moment().fromNow());
console.log("hello");
// random  date from now
console.log(
  "random date from now",
  moment()
    .add(Math.floor(Math.random() * 100), "days")
    .format("YYYY-MM-DD")
);
// get date current
console.log("date current", moment().format("YYYY-MM-DD"));
// get month ago
console.log("month ago", moment().subtract(1, "month").format("YYYY-MM-DD"));

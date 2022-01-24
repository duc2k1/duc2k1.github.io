const moment = require("moment-timezone");
console.log("🚀 ~ file: aaa.js ~ line 2 ~ moment now", moment().toDate());

const startDate = moment().startOf("month").subtract(12, "months").toDate();
console.log("🚀 ~ file: aaa.js ~ line 4 ~ startDate", startDate);
const endDate = moment().endOf("month").toDate();
console.log("🚀 ~ file: aaa.js ~ line 6 ~ endDate", endDate);

const prevStartDate = moment(startDate).subtract(1, "years").toDate();
console.log("🚀 ~ file: aaa.js ~ line 3 ~ prevStartDate", prevStartDate);

const prevEndDate = moment("2012-02-29T16:59:59.999Z")
  .subtract(1, "years")
  .toDate();
console.log("🚀 ~ file: aaa.js ~ line 5 ~ prevEndDate", prevEndDate);

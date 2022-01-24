const moment = require("moment-timezone");
const startDate = moment().subtract(11, "months").toDate();
console.log("🚀 ~ file: aaa.js ~ line 3 ~ startDate", startDate); // 2021-02-24T03:13:13.748Z
const endDate = moment().startOf("month").toDate(); // 2021-12-31T17:00:00.000Z
console.log(endDate);

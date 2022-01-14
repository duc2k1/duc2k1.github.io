const moment = require("moment-timezone");

console.log("moment-timezone:", moment().subtract(1, "month").toDate());

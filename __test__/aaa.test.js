const { getData } = require("../");

test("Example test", () => {
  if (getData() == "hello") expect(true).toEqual(true);
  if (getData() != "hello") expect(false).toEqual(true);
});

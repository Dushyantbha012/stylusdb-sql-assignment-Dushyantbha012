const executeSELECTQuery = require("./src/index");
async function main() {
  const query = "SELECT age, COUNT(*) FROM student GROUP BY age";
  const result = await executeSELECTQuery(query);
  console.log("result is", result);
}
main();

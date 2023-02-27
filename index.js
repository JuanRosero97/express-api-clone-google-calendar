const server = require("./server");
var port = process.env.PORT || 3000;
server().listen(port, () => {
  console.log("Server listening on port", port);
});

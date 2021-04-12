import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
  const app = await startServer();
  connect();
  app.listen(3000);
  console.log("Server on port 3000");
}

main();

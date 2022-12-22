import express from "express";
import cors from "cors";
import _ from "lodash";
import { QueryPayload } from "simple-shared-data";
const app = express();
const port = 3001;

// export interface QueryPayload {
//   payload: string;
// }

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/data", (_req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase("Server data returned successfully"),
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Listening at : http://localhost:${port}`);
});

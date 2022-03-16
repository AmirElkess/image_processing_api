import express from "express";
import routes from "./routes/index";
import logger from "./middleware";

const app = express();
const port = 3000;
app.use(logger);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default app;

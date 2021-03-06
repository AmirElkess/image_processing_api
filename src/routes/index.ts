import express from "express";
import images from "./api/images";

const routes = express.Router();

routes.use("/images", images);

routes.get("/", (req: express.Request, res: express.Response): void => {
  res.send(
    "navigate to /api/images/ and supply filename, width, and height as  url parameters"
  );
});

export default routes;

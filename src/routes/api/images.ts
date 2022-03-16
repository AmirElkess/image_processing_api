import express from "express";
import { getImage, imageNotPresent } from "../../functions";

const images = express.Router();

images.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    if (width <= 0 || height <= 0) {
      res.send("Width and height parameters should be greater than 0");
      return;
    }

    if (Number.isNaN(width) || Number.isNaN(height)) {
      res.send("Width and height parameters should have a numeric value");
      return;
    }

    const filename = req.query.filename as string;
    const response = await getImage(filename, width, height);
    if (response === imageNotPresent) {
      res.send("cannot find image specified");
    } else {
      res.sendFile(response);
    }
  }
);

export default images;

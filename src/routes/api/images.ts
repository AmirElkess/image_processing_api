import express from "express";
import { getImage, imageNotPresent } from "../../functions";

const images = express.Router();

images.get("/", async (req, res) => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const filename = req.query.filename as string;
  const response = await getImage(filename, width, height);
  if (response === imageNotPresent) {
    res.send("cannot find image specified");
  } else {
    res.sendFile(response);
  }
});

export default images;

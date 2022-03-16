import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const imageNotPresent = "imageNotPresent";
const assetSrcDir = path.resolve(__dirname, "../assets/full");
const assetDstDir = path.resolve(__dirname, "../assets/cache");

async function resizeImage(
  inPath: string,
  outPath: string,
  w: number,
  h: number
): Promise<void> {
  await sharp(inPath).resize(w, h).toFile(outPath);
}

async function isOnDisk(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch (e) {
    return false;
  }
}

async function getImage(
  filename: string,
  w: number,
  h: number
): Promise<string> {
  const imgSrc = path.resolve(assetSrcDir, `${filename}.jpg`);
  const imgDst = path.resolve(assetDstDir, `${filename}-${w}_${h}.jpg`);

  if (!(await isOnDisk(imgSrc))) {
    return imageNotPresent;
  }
  if (await isOnDisk(imgDst)) {
    console.log(`serving cached image: ${imgDst}`);
  } else {
    console.log(`converting image: ${imgDst}`);
    await resizeImage(imgSrc, imgDst, w, h);
  }
  return imgDst;
}

export { getImage, imageNotPresent };

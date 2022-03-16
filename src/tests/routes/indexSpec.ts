import supertest from "supertest";
import app from "../../index";
import { getImage } from "../../functions";
import path from "path";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

const assetDstDir = path.resolve(__dirname, "../../../assets/cache");

describe("Testing endpoints", (): void => {
  it("GETs /", async (): Promise<void> => {
    const res: supertest.Response = await request.get("/");
    expect(res.status).toBe(404);
  });

  it("GETs /api", async (): Promise<void> => {
    const res: supertest.Response = await request.get("/api");
    expect(res.status).toBe(200);
  });

  it("GETs /api with valid parameters", async (): Promise<void> => {
    const res: supertest.Response = await request.get(
      "/api/images?filename=fjord&width=200&height=200"
    );
    expect(res.status).toBe(200);
  });

  it("GETs /api with invalid parameters", async (): Promise<void> => {
    const res: supertest.Response = await request.get(
      "/api/images?filename=hello&width=200&height=200"
    );
    expect(res.status).toBe(200);
  });
});

describe("Testing Image Functions", async (): Promise<void> => {
  const filename = "fjord";
  const width = 144;
  const height = 144;
  const imgDst = path.resolve(
    assetDstDir,
    `${filename}-${width}_${height}.jpg`
  );

  it("tests getImage()", async (): Promise<void> => {
    const res = await getImage(filename, width, height);
    expect(res).toEqual(imgDst);
  });
});

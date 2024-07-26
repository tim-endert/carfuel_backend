import { describe } from "node:test";
import request from "supertest";
import app from "../app";
import FuelStation from "../models/fuelStation";

const token = "dGVzdDpwYXNz";

describe("GET /stations", () => {
  it("should return all stations", async () => {
    const res = await request(app)
      .get("/stations")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /stations", () => {
  const exampleStation: Partial<FuelStation> = {
    name: "Test-Station",
    address: "Im Wald",
    city: "Zurich",
    latitude: 1.1,
    longitude: 2.2,
  };
  test("should create a station", async () => {
    return request(app)
      .post("/stations")
      .set("Authorization", `Bearer ${token}`)
      .send(exampleStation)
      .expect(201)
      .then(({ body }) => {
        expect(body.name).toBe("Test-Station");
      });
  });
});

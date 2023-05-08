import request, { Response } from "supertest";
import { app } from "./index";
import { describe } from "node:test";

describe("Basic Operation", () => {
  test("Return HI", async () => {
    const res = await request(app).get("/").expect(200).expect({ info: "HI" });
  });
});

describe("Application CRUD", () => {
  describe("GET /applications", () => {
    test("Response /applications Success", async () => {
      const res = await request(app).get("/applications");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(-1);
    });
  });

  describe("GET /applications/:id", () => {
    test("Response to /application/:id Success", async () => {
      const res: Response = await request(app).get("/applications/50");
      expect(res.statusCode).toBe(200);
      expect(res.body).not.toEqual([]);
      expect(res.body.length).toEqual(1);
    });

    test("Response to /application/:id Failed", async () => {
      const res: Response = await request(app).get("/applications/test");
      expect(res.statusCode).toBe(401);
    });
  });

  describe("GET /applications/sorted/:method/:type", () => {
    test("Response to /applications/sorted/modified/DESC", async () => {
      const res: Response = await request(app).get(
        "/applications/sorted/modified/DESC"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(-1);
      expect(
        new Date(res.body[0].modified) > new Date(res.body[1].modified)
      ).toEqual(true);
    });

    test("Response to /applications/sorted/modified/ASC", async () => {
      const res: Response = await request(app).get(
        "/applications/sorted/modified/ASC"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(-1);
      expect(
        new Date(res.body[0].modified) > new Date(res.body[1].modified)
      ).toEqual(false);
    });

    test("Response to /applications/sorted/modified/TWO", async () => {
      const res: Response = await request(app).get(
        "/applications/sorted/modified/TWO"
      );
      expect(res.statusCode).toBe(404);
    });
  });

  // describe("POST /applications", () => {
  //   afterEach(() => {});
  //   test("Response to /applications", async () => {
  //     const newApplication = {
  //       title: "Intern",
  //       company: "Company",
  //       status: "created",
  //       url: "https://112523chen.github.io",
  //       description: "",
  //     };

  //     const res: Response = await request(app)
  //       .post("/applications/")
  //       .send(newApplication);
  //     expect(res.statusCode).toEqual(201);
  //     expect(res.text).toBe("Application has been created");
  //   });
  // });

  // describe("UPDATE /applications/:id", () => {
  //   const newApplication = {
  //     title: "Intern",
  //     company: "Company",
  //     status: "created",
  //     url: "https://112523chen.github.io",
  //     description: "",
  //   };

  //   test("Response to /applications/50", async () => {
  //     const res: Response = await request(app).put("/applications/50").send();
  //     expect(res.statusCode).toEqual(201);
  //   });
  // });
});

describe("Chart Data", () => {
  test("GET Bar Chart Data", async () => {
    const res = await request(app).get("/barChartData");
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.length).toBeLessThanOrEqual(6);
  });
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("./index");
const node_test_1 = require("node:test");
(0, node_test_1.describe)("Basic Operation", () => {
    test("Return HI", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).get("/").expect(200).expect({ info: "HI" });
    }));
});
(0, node_test_1.describe)("Application CRUD", () => {
    (0, node_test_1.describe)("GET /applications", () => {
        test("Response /applications Success", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications");
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(-1);
        }));
    });
    (0, node_test_1.describe)("GET /applications/:id", () => {
        test("Response to /application/:id Success", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications/50");
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toEqual([]);
            expect(res.body.length).toEqual(1);
        }));
        test("Response to /application/:id Failed", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications/test");
            expect(res.statusCode).toBe(401);
        }));
    });
    (0, node_test_1.describe)("GET /applications/sorted/:method/:type", () => {
        test("Response to /applications/sorted/modified/DESC", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications/sorted/modified/DESC");
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(-1);
            expect(new Date(res.body[0].modified) > new Date(res.body[1].modified)).toEqual(true);
        }));
        test("Response to /applications/sorted/modified/ASC", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications/sorted/modified/ASC");
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(-1);
            expect(new Date(res.body[0].modified) > new Date(res.body[1].modified)).toEqual(false);
        }));
        test("Response to /applications/sorted/modified/TWO", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(index_1.app).get("/applications/sorted/modified/TWO");
            expect(res.statusCode).toBe(404);
        }));
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
(0, node_test_1.describe)("Chart Data", () => {
    test("GET Bar Chart Data", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).get("/barChartData");
        expect(res.statusCode).toBe(201);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBeLessThanOrEqual(6);
    }));
});

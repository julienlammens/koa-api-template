import request from "supertest";
import app from "../src/server";

const server = app.callback();

describe("Example Controller", () => {
  it("should repeat the string", async () => {
    const testQuery = "test_query";
    const response = await request(server).get(`/example?string=${testQuery}`);
    return expect(response.body.string).toBe(testQuery);
  });
});

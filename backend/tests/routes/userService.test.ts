import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown, createDemoData } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
  await createDemoData();
});

afterAll(async () => {
  await tearDown();
});

describe("Testing Login with fail result", () => {
  it("Trying Login with wrong information", async () => {
    const res = await request(app).post("/login").send({
      email: "notUser@gmail.com",
      password: "notUser",
    });
    expect(res.status).toBe(404);
    expect(JSON.parse(res.text).message).toBe("Invalid User Detail!");
  });
  it("Trying access '/users' Api without login", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(401);
    expect(JSON.parse(res.text).message).toBe("No authorization token provided!");
  });
  it("Trying access users with Expired token", async () => {
    const res = await request(app).get("/users").set({
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU4OTNhNTc4NGY4OTU3YjE0YTg4ODciLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInVzZXJHcm91cCI6WyI2MmU3NGE4NDAxNjc1ZjA3MjU0NTE3Y2UiLCI2MmYwNzg5NDdkMDllNWFhOWNiNTU4OGMiLCI2MmYwNzhlZTdkMDllNWFhOWNiNTU4OGQiXSwiaWF0IjoxNjYwMDI5OTE0LCJleHAiOjE2NjAwMjk5MTR9.WU7AlomJUWJ9PZuSraQIyzBQ_vB5A9aR20uvXzlFBqo",
    });
    expect(res.status).toBe(401);
    expect(JSON.parse(res.text).message).toBe("Expired token");
  });
  it("Trying access users with Invalid token -1", async () => {
    const res = await request(app).get("/users").set({
      "Content-Type": "application/json",
      Authorization: "Bearer 7AlomJUWJ9PZuSraQIyzBQ_vB5A9aR20uvXzlFBqo",
    });
    expect(res.status).toBe(403);
    expect(JSON.parse(res.text).message).toBe("Inviled Token");
  });
  it("Trying access users with Invalid token -2", async () => {
    const res = await request(app).get("/users").set({
      "Content-Type": "application/json",
      Authorization: "7AlomJUWJ9PZuSraQIyzBQ_vB5A9aR20uvXzlFBqo",
    });
    expect(res.status).toBe(403);
    expect(JSON.parse(res.text).message).toBe("Inviled Token");
  });
  it("Trying access users without Authorization", async () => {
    const res = await request(app).get("/users").set({
      "Content-Type": "application/json",
    });
    expect(res.status).toBe(401);
    expect(res.text).toBe('{"message":"No authorization token provided!"}');
  });
});

let AllowedToken: string;
let NotAllowedToken: string;
describe("Testing '/users' API", () => {
  it("Trying to Login with permitted and not permitted", async () => {
    const res = await request(app).post("/login").send({ email: "user1@gmail.com", password: "user1" });
    expect(res.status).toBe(200);
    const data = JSON.parse(res.text);
    AllowedToken = data.data.token;
    const res1 = await request(app).post("/login").send({ email: "user4@gmail.com", password: "user4" });
    expect(res1.status).toBe(200);
    const data1 = JSON.parse(res1.text);
    NotAllowedToken = data1.data.token;
  });

  it("Testing GET '/users' api", async () => {
    const res = await request(app)
      .get("/users")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${AllowedToken}` });
    expect(res.status).toBe(200);
    const res1 = await request(app)
      .get("/users")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${NotAllowedToken}` });
    expect(res1.status).toBe(403);
  });
});

describe("Testing '/groups' API", () => {
  it("Testing GET '/groups' api", async () => {
    const res = await request(app)
      .get("/groups")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${AllowedToken}` });
    expect(res.status).toBe(200);
    const res1 = await request(app)
      .get("/groups")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${NotAllowedToken}` });
    expect(res1.status).toBe(403);
  });
});
describe("Testing GET '/group' API", () => {
  it("Testing GET '/group' api", async () => {
    const res = await request(app)
      .get("/groups")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${AllowedToken}` });
    expect(res.status).toBe(200);
    const res1 = await request(app)
      .get("/groups")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${NotAllowedToken}` });
    expect(res1.status).toBe(403);
  });
});
describe("Testing Patch '/group' API", () => {
  it("Testing Patch '/group' api", async () => {
    const res = await request(app)
      .patch("/group")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${AllowedToken}` })
      .send({});
    expect(res.status).toBe(200);
    const res1 = await request(app)
      .get("/groups")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${NotAllowedToken}` });
    expect(res1.status).toBe(403);
  });
});

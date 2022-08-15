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

let userToken: string;
const wrongToken = `"asdeyJhbGasdasdasdciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU4OTNhNTc4NGY4OTU3YjE0YTg4ODciLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInVzZXJHcm91cCI6WyI2MmU3NGE4NDAxNjc1ZjA3MjU0NTE3Y2UiLCI2MmYwNzg5NDdkMDllNWFhOWNiNTU4OGMiLCI2MmYwNzhlZTdkMDllNWFhOWNiNTU4OGQiXSwiaWF0IjoxNjYwMDMyNDQwLCJleHAiOjE2OTE1Njg0NDB9.Te2q_F5H3d2B9qrQb5jT1EDqTgxowTgVDY2tFIkobUo"`;
let userHasNoPermissionToken: string;

describe("Testing user CRUD", () => {
  it("Login Service with wrong information", async () => {
    const res = await request(app).post("/login").send({
      email: "notUser@gmail.com",
      password: "notUser",
    });
    expect(res.status).toBe(404);
    expect(JSON.parse(res.text).message).toBe("Invalid User Detail!");
  });

  it("Login Service with wrong information", async () => {
    const res = await request(app).post("/login").send({
      email: "notUser@gmail.com",
      password: "notUser",
    });
    expect(res.status).toBe(404);
    expect(JSON.parse(res.text).message).toBe("Invalid User Detail!");
  });

  it("Login Service and it should return data with success: true", async () => {
    const res = await request(app).post("/login").send({
      email: "user1@gmail.com",
      password: "user1",
    });
    expect(res.status).toBe(200);
    const data = JSON.parse(res.text);
    userToken = data.data.token;
  });

  it("get all users expected success", async () => {
    const res = await request(app)
      .get("/users")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${userToken}` });
    expect(res.status).toBe(200);
  });

  it("get all users expected failure by wrong userToken", async () => {
    const res = await request(app)
      .get("/users")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${wrongToken}`,
      });
    expect(res.status).toBe(403);
  });

  it("get user by id expected success", async () => {
    const res = await request(app)
      .get("/user/62e893a5784f8957b14a8887")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      });
    expect(res.status).toBe(200);
  });

  it("get user by id expected failure by wrong userToken", async () => {
    const res = await request(app)
      .get("/user/62e8f13b40eee4ce60fa373e")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${wrongToken}`,
      });
    expect(res.status).toBe(403);
  });

  it("user register expected failure", async () => {
    const res = await request(app)
      .post("/register")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${wrongToken}`,
      })
      .send({
        userName: "jvk",
        email: "jvk@gmail.com",
        password: "12345",
        department: "Developer",
      });
    expect(res.status).toBe(403);
  });

  it("user register expected failure with username or email already registered", async () => {
    const res = await request(app)
      .post("/register")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        userName: "jvk",
        email: "user1@gmail.com",
        password: "12345",
        department: "Developer",
      });
    expect(res.status).toBe(400);
  });

  it("user register expected success", async () => {
    const res = await request(app)
      .post("/register")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        userName: "jvk",
        email: "jvk@gmail.com",
        password: "12345",
        department: "Developer",
      });
    expect(res.status).toBe(201);
  });

  it("user update expected success", async () => {
    const res = await request(app)
      .patch("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        update: { department: "Manager" },
      });
    expect(res.status).toBe(200);
  });

  it("user update expected failure", async () => {
    const res = await request(app)
      .patch("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        update: "Manager",
      });
    expect(res.status).toBe(200);
  });

  it("Login into user that has no groups", async () => {
    const res = await request(app).post("/login").send({
      email: "user4@gmail.com",
      password: "user4",
    });
    const data = JSON.parse(res.text);
    userHasNoPermissionToken = data.data.token;
  });

  it("user update expected failure", async () => {
    const res = await request(app)
      .patch("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userHasNoPermissionToken}`,
      })
      .send({
        userId: "62e8ca16e385b0a0864164ee",
        update: { department: "Manager" },
      });
    expect(res.status).toBe(403);
  });

  it("user delete expected failure", async () => {
    const res = await request(app)
      .delete("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userHasNoPermissionToken}`,
      })
      .send({
        userId: "62e8ca16e385b0a0864164ef",
      });
    expect(res.status).toBe(403);
  });

  it("user delete expected success", async () => {
    const res = await request(app)
      .delete("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        userId: "62e8f13b40eee4ce60fa373e",
      });
    expect(res.status).toBe(200);
  });

  it("is super admin expect true", async () => {
    const res = await request(app)
      .delete("/user")
      .set({
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      })
      .send({
        userId: "62e8f13b40eee4ce60fa373e",
      });
    expect(res.status).toBe(200);
  });
});

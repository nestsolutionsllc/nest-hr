import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

let userToken: string;
describe("Testing user CRUD", () => {
  it("Trying Login Service with wrong information", async () => {
    const res = await request(app).post("/login").send({
      email: "user5@gmail.com",
      password: "user5",
    });
    expect(res.status).toBe(404);
  });
  it("Trying Login Service and it should return data with success: true", async () => {
    const res = await request(app).post("/login").send({
      email: "user1@gmail.com",
      password: "user1",
    });
    expect(res.status).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.data.email).toBe("user1@gmail.com");
    userToken = data.data.token;
  });

  it("Testing get users api", async () => {
    const res = await request(app)
      .get("/users")
      .set({ "Content-Type": "application/json", Authorization: `Bearer ${userToken}` });
    expect(res.status).toBe(200);
    const data = JSON.parse(res.text);
    expect(data[0].userName).toBe("user1");
    expect(data[1].userName).toBe("user2");
    expect(data[2].userName).toBe("user3");
  });

  // it("It should response user object created", async () => {
  //   const res = await request(app)
  //     .post("/user")
  //     .send({
  //       title: "User name 1",
  //       director: "Director name",
  //       stars: ["Character 1", "Character 2"],
  //       year: 0,
  //     });
  //   expect(res.statusCode).toBe(201);
  //   const data = JSON.parse(res.text);
  //   userToken = data._id;
  //   expect(data.title).toBe("user name 1");
  //   expect(data.director).toBe("Director name");
  //   expect(data.stars).toStrictEqual(["Character 1", "Character 2"]);
  //   expect(data.year).toBe(0);
  // });

  // it("It should respond a user object by id", async () => {
  //   const res = await request(app).get(`/user/${userId}`);
  //   expect(res.statusCode).toBe(200);
  //   const data = JSON.parse(res.text);
  //   expect(data.title).toBe("User name 1");
  // });

  // it("After saving an object, list size should be 2", async () => {
  //   const res = await request(app).get("/users");
  //   expect(res.statusCode).toBe(200);
  //   const data = JSON.parse(res.text);
  //   expect(data.length).toBe(2);
  //   userId = data[0]._id;
  // });

  // it("Inserting data with invalid body and it should return 400", async () => {
  //   const res = await request(app).patch(`/user/${userId}`).send({
  //     title: "newTitle",
  //   });
  //   expect(res.statusCode).toBe(200);
  //   const data = JSON.parse(res.text);
  //   expect(data.title).toBe("newTitle");
  // });

  // it("Delete row with given _id that previously store", async () => {
  //   const res = await request(app)
  //     .post("/user")
  //     .send({
  //       title: "user name",
  //       director: "Director name",
  //       stars: ["Character 1", "Character 2", "Character 3"],
  //       year: 0,
  //     });
  //   expect(res.statusCode).toBe(201);

  //   const data = JSON.parse(res.text);
  //   expect(data._id).toBeDefined();

  //   const { _id } = data;
  //   const deleteResponse = await request(app).delete("/user").send({ _id });

  //   expect(deleteResponse.statusCode).toBe(200);
  // });

  // it("Try to delete not existing data and it should respond 404", async () => {
  //   const deleteResponse = await request(app).delete("/user").send({ _id: "Doesn't exist" });

  //   expect(deleteResponse.statusCode).toBe(500);
  // });
});

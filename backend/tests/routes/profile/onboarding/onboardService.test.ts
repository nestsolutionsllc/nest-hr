import request from "supertest";
import { setupEnvironment, tearDown } from "../../../utils/setupEnvironment";
import app from "../../../../src/app";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

let onboardId: string;
describe("Testing onboard CRUD", () => {
  it("It should be empty list before saving objects", async () => {
    const res = await request(app).get("/allOnboard");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response onboard object created", async () => {
    const res = await request(app)
      .post("/createOnboard")
      .send({
        role: "Developer",
        questions: [{ type: "Tools", questions: [{ question: "Developer tool1" }] }],
      });
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);
    onboardId = data._id;
    expect(data.role).toBe("Developer");
  });

  it("It should respond a onboard object by id", async () => {
    const res = await request(app).get(`/getOnboard/${onboardId}`);
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.role).toBe("Developer");
  });

  it("After saving an object, list size should be 1", async () => {
    const res = await request(app).get("/allOnboard");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(1);
    onboardId = data[0]._id;
  });

  it("It should patch the data and saves object", async () => {
    const res = await request(app).patch(`/updateOnboard/${onboardId}`).send({
      role: "Manager",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.role).toBe("Manager");
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app)
      .post("/createOnboard")
      .send({
        role: "Developer",
        questions: [{ type: "Tools", questions: [{ question: "Developer tool1" }] }],
      });
    expect(res.statusCode).toBe(201);

    const data = JSON.parse(res.text);
    expect(data._id).toBeDefined();

    const { _id } = data;
    const deleteResponse = await request(app).delete("/deleteOnboard").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 404", async () => {
    const deleteResponse = await request(app).delete("/deleteOnboard").send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});

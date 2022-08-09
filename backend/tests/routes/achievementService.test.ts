import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

let achievementId: string;
describe("Testing achievement CRUD", () => {
  it("It should response achievement object created", async () => {
    const res = await request(app).post("/achievement").send({
      category: "skills",
      data: [],
    });
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);
    expect(data.category).toBe("skills");
  });

  it("It should response achievement's array of data created", async () => {
    const res = await request(app)
      .post("/achievement")
      .send({
        category: "certificates",
        data: [
          {
            title: "AWS Certified DevOps Engineer Professional",
            companyName: "Amazon Web Services (AWS)",
            date: "2022",
          },
        ],
      });
    expect(res.statusCode).toBe(201);
    const object = JSON.parse(res.text);
    achievementId = object._id;
    expect(object.data[0].title).toBe("AWS Certified DevOps Engineer Professional");
    expect(object.data[0].companyName).toBe("Amazon Web Services (AWS)");
    expect(object.data[0].date).toBe("2022");
  });

  it("It should respond a achievement object by id", async () => {
    const res = await request(app).get(`/achievement/${achievementId}`);
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.data[0].title).toBe("AWS Certified DevOps Engineer Professional");
  });

  it("After saving an object, list size should be 2", async () => {
    const res = await request(app).get("/achievements");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(2);
    achievementId = data[0]._id;
  });

  it("Inserting data with invalid body and it should return 400", async () => {
    const res = await request(app).patch(`/achievement/${achievementId}`).send({
      category: "newCategory",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.category).toBe("newCategory");
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app).post("/achievement").send({
      category: "skills",
      data: [],
    });
    expect(res.statusCode).toBe(201);

    const data = JSON.parse(res.text);
    expect(data._id).toBeDefined();

    const { _id } = data;
    const deleteResponse = await request(app).delete("/movie").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 404", async () => {
    const deleteResponse = await request(app).delete("/achievement").send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});

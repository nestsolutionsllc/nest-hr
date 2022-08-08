import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

const newTicket = {
  reporter_id: "001",
  assignee_id: "002",
  summary: "test",
  assignee_group: "003",
  status: "open",
  type: "office",
  priority: "low",
  description: "test description",
};

let ticketId: string;
describe("Testing ticketing CRUD", () => {
  it("It should response ticket object created", async () => {
    const res = await request(app).post("/ticket").send(newTicket);
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);
    ticketId = data._id;
    expect(data.reporter_id).toBe("001");
  });

  it("It should respond a ticket object by '_id'", async () => {
    const res = await request(app).get(`/ticket/${ticketId}`);
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.reporter_id).toBe("001");
  });

  it("It should return a 500 status if '_id' is invalid", async () => {
    const res = await request(app).get(`/ticket/${"Doesn't exist"}`);
    expect(res.statusCode).toBe(500);
  });

  it("It should respond a ticket object by report_id or assignee_id", async () => {
    const res = await request(app).post("/tickets").send({
      id: "001",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data[0].reporter_id).toBe("001");
  });

  it("After saving an object, list size should be 2", async () => {
    await request(app).post("/ticket").send(newTicket);
    const res = await request(app).get("/tickets");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(2);
    ticketId = data[0]._id;
  });

  it("It should respond inserting data body", async () => {
    const res = await request(app).patch(`/ticket/${ticketId}`).send({
      status: "rejected",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.status).toStrictEqual(["rejected"]);
  });

  it("Inserting data with invalid body and it should return 404", async () => {
    const res = await request(app).patch("/ticket").send({
      test: "test",
    });
    expect(res.statusCode).toBe(404);
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app).post("/ticket").send(newTicket);
    expect(res.statusCode).toBe(201);

    const data = JSON.parse(res.text);
    expect(data._id).toBeDefined();

    const { _id } = data;
    const deleteResponse = await request(app).delete("/ticket").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 500", async () => {
    const deleteResponse = await request(app).delete("/ticket").send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});

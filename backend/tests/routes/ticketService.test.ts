import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

/*
Summary of the ticket system CURD test:
  1. Create a new ticket:
    - Incomplete ticket data,
    - No ticket data
  2. Get ticket
    - Invalid ticket '_id',
    - No ticket '_id'
  3. Update ticket
    - Without inserting data,
    - invalid ticket '_id',
  4. Delete a ticket
    - Doesn't exits ticket,
  5. Get all tickets
    - Get tickets by own 'id'
    - invlid 'id',
    - Without 'id',
*/

const newTicket = {
  reporter_id: "001",
  assignee_id: "002",
  summary: "test",
  assignee_group: "003",
  status: "open",
  type: "office",
  priority: "low",
  description: "description",
};

let ticketId: string;
describe("Testing ticketing system CRUD", () => {
  describe("1. Create a new ticket", () => {
    it("It should response ticket object created", async () => {
      const res = await request(app).post("/ticket").send(newTicket);
      expect(res.statusCode).toBe(201);
      const data = JSON.parse(res.text);
      ticketId = data._id;
      expect(data.reporter_id).toBe("001");
    });
    it("It should return 400 error if ticket object is incomplete", async () => {
      const res = await request(app).post("/ticket").send({ reporter_id: "001" });
      expect(res.statusCode).toBe(400);
    });
    it("It should return 400 error if there is no ticket object", async () => {
      const res = await request(app).post("/ticket");
      expect(res.statusCode).toBe(400);
    });
  });
  describe("2. Get ticket", () => {
    it("It should respond a ticket object by 'id'", async () => {
      const res = await request(app).get(`/ticket/${ticketId}`);
      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.reporter_id).toBe("001");
    });
    it("It should return a 500 status if 'id' is invalid", async () => {
      const res = await request(app).get(`/ticket/${"Doesn't exist"}`);
      expect(res.statusCode).toBe(500);
    });

    it("It should return a 404 status if there is no 'id'", async () => {
      const res = await request(app).get("/ticket/");
      expect(res.statusCode).toBe(404);
    });
  });

  describe("3. Update a ticket", () => {
    it("It should respond inserting data body", async () => {
      const res = await request(app).patch(`/ticket/${ticketId}`).send({
        status: "rejected",
      });
      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.status).toStrictEqual(["rejected"]);
    });
    it("It should return 400, if without inserting data", async () => {
      const res = await request(app).patch(`/ticket/${ticketId}`);
      expect(res.statusCode).toBe(400);
    });
    it("It should return 400, if inserting data with invalid ticket id", async () => {
      const res = await request(app).patch("/ticket/DoesntExist").send({
        status: "rejected",
      });
      expect(res.statusCode).toBe(400);
    });
  });

  describe("4. Delete a ticket", () => {
    it("Delete row with given '_id' that previously store", async () => {
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

  describe("5. Get all tickets", () => {
    it("It should respond get all tickets", async () => {
      await request(app).post("/ticket").send(newTicket);
      const res = await request(app).get("/tickets");
      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.length).toBe(2);
    });
    it("It should respond a ticket object by 'id'", async () => {
      const res = await request(app).post("/tickets").send({
        id: "001",
      });
      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data[0].reporter_id).toBe("001");
    });
    it("It should return 500 error if 'id' is invalid", async () => {
      const res = await request(app).post("/tickets").send({
        id: "Doesn't exist",
      });
      expect(res.statusCode).toBe(500);
    });
    it("It should  return 404 error if request is without 'id'", async () => {
      const res = await request(app).post("/tickets");
      expect(res.statusCode).toBe(404);
    });
  });
});

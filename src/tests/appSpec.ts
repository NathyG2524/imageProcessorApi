import supertest from "supertest";
import app from "../app";

const request = supertest(app);

it("returns 404 for invalid endpoint", async () => {
	const response: supertest.Response = await request.get("/unknown");

	expect(response.status).toBe(404);
});

it("checks for missing query parameters", async () => {
	const response = await request.get("/api/images?filename=fjord");
	expect(response.status).toBe(200);
});

it("checks for correct query parameters name", async () => {
	const response: supertest.Response = await request.get(
		"/api/images?filename=fjord"
	);

	expect(response.status).toBe(200);
});

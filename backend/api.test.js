import request from 'supertest'
import 'jest'
import app from './index'


describe("employee", () => {
  it("Responds 200", async done => {
    const response = await request(app).get("/employee");
    expect(response.status).toBe(200);
    done();
  });
  it("Responds with valid json", async done => {
    const response = await request(app).get("/employee");
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toMatch(/json/);
    done();
  });
});

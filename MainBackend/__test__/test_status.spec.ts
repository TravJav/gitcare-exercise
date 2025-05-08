import request from 'supertest';
import express from 'express';
import statusRouter from '../routes/status';

const app = express();
app.use(statusRouter);

describe('GET /api', () => {
  it('should return 200 and the correct message', async () => {
    const response = await request(app).get('/api');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Server is running as expected. Only user authenticated requests are permitted',
      status: true,
      title: 'Alive',
    });
  });
});

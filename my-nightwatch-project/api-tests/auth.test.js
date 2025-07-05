const request = require('supertest');
const createServer = require(require.resolve('mock-user-auth', { paths: [__dirname] }));

let app;

beforeAll(async () => {
  app = await createServer();
});

describe('User Auth API Tests', () => {
  
  test('Register with valid data', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'gerges', password: 'testpass' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  test('Register missing password returns 400', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'gerges' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('Login with valid data', async () => {
    await request(app).post('/register').send({ username: 'gerges', password: 'testpass' });

    const res = await request(app)
      .post('/login')
      .send({ username: 'gerges', password: 'testpass' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  test('Login missing password returns 400', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'gerges' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

});

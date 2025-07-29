import app from './index'
import request from 'supertest';


describe('GET /hello', () => {
  it('should be a 201 status code', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(201);
  });
});

describe('GET /health', () => {
  it('should be a 200 status code', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /echo', () => {
    it('should return the same argument sended', async() => {
        const msj = { message: 'Hola mundo' };
        const res = await  request(app).post('/echo')
        .send(msj) // 👈 Aquí va el body
        .set('Accept', 'application/json');
        expect(res.body).toEqual(msj);
    })
})
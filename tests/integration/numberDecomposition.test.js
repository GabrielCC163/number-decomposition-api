const request = require('supertest');
const app = require('../../src/app');

describe('GET /decomposition:number', () => {
  it('should return divisors and primes of 45', async () => {
    const response = await request(app).get('/decomposition/45');

    expect(response.status).toBe(200);

    expect(response.body.divisors).toEqual([1, 3, 5, 9, 15, 45]);
    expect(response.body.primes).toEqual([3, 5]);
  });

  it('should return divisors and primes of 127', async () => {
    const response = await request(app).get('/decomposition/127');

    expect(response.status).toBe(200);

    expect(response.body.divisors).toEqual([1, 127]);
    expect(response.body.primes).toEqual([127]);
  });

  it('should return 1', async () => {
    const response = await request(app).get('/decomposition/1');

    expect(response.status).toBe(200);

    expect(response.body.divisors).toEqual([1]);
    expect(response.body.primes).toEqual([]);
  });

  it('should return error message', async () => {
    const response = await request(app).get('/decomposition/-23');

    expect(response.status).toBe(400);

    expect(response.body.message).toBe(
      'A positive integer is required.',
    );
  });
});

const supertest = require('supertest');

const mapdata = require('./server.js');

describe('mapdata', () => {
  describe('GET /', () => {

    // that process.env.DB_ENV is pointing to 'testing'
    it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

    // asynchronous test need to either return the promise
    it('responds with 200 OK', () => {
      return supertest(mapdata)
        .get('/')
        .expect(200);
    });

    // or use the squad async/await
    it('responds with 200 OK', async () => {
      await supertest(mapdata)
        .get('/')
        .expect('Content-Type', /text/i);
    });

    // using done
    it('responds with correct status', done => {
      supertest(mapdata)
        .get('/')
        .expect(200, done);
    });
  });
});

// const express = require('express');
// const app = express();
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
import 'regenerator-runtime/runtime';


it('response with a location at /stay', async done => {
  const res = await request.get('/stay');
  expect(res.status).toBe(200)
  expect(res.body.length).toEqual(100)
// console.log(res.body)
  done();
})

it('response with a location at /stay/ratings', async done => {
  const res = await request.get('/stay/ratings');
  expect(res.status).toBe(200)
  expect(res.body.length).toEqual(1)
// console.log(res.body.length)
  done();
})


// const express = require('express');
// const app = express();
const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);


it('response with a location at /stay', async done => {
  const res = await request.get('/stay');
  // .post('/stay')
  // .send({
  //   id: 10,
  //   placeName: "New! Clif-Side House With Wifi/Netflix",
  //   location: "Jersey City, New Jersey, United States"
  // })
  expect(res.status).toBe(200)
  expect(res.body.placeName).toEqual("New! Clif-Side House With Wifi/Netflix")
  done();
})



'use strict';
const server = require('../src/server');
//const supertest=require('supertest');
const supergoose = require('@code-fellows/supergoose');

const request = supergoose(server.app);

describe('api-server', () => {


  it(' get status 404 for bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);

  });

  it(' get status 404 for bad method ', async () => {
    const response2 = await request.post('/food');
    expect(response2.status).toBe(404);
  });

});



describe('food ', () => {
  let id;
  it(' create a new food using POST', async () => {

    let food = {
      objName: 'apple',
      objPrice: '2',
    };

    const response = await request.post('/api/v1/food').send(food);

    expect(response.status).toEqual(201);
    expect(response.body.objName).toEqual('apple');
    expect(response.body.objPrice).toEqual('2');
    expect(response.body._id.length).toBeGreaterThan(0);
    id = response.body._id;
  });
  it(' read a list of food  using GET', async () => {
    const response = await request.get('/api/v1/food');
    expect(Array.isArray(response.body)).toBeTruthy();

  });

  it('should read a food by id using GET', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.body[0].objName).toEqual('apple');
    expect(response.body[0].objPrice).toEqual('2');
  });
  it('Update a food using PUT', async () => {
    let editFood = {
      objName: 'banana',
      objPrice: '2',
    };

    const response = await request.put(`/api/v1/food/${id}`)
      .send(editFood);
    expect(response.status).toEqual(200);
    expect(response.body.objName).toEqual('banana');
  });
  it('delete a record using DELETE', async () => {

    const response = await request.delete(`/api/v1/food/${id}`);

    expect(response.status).toEqual(200);

  });

});

'use strict';

const pool = require('./pool');
class DataCollection {
  constructor(model) {
    this.model = model;
  }

  read(id) {
    if (id) {
      return pool.query('SELECT * FROM market WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM market;');
  }

  create(obj) {
    const sql = 'INSERT INTO market (objName,objPrice) VALUES ($1,$2) RETURNING *;';
    const safeValues = [obj.objName, obj.objPrice];
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    const sql = 'UPDATE market SET objName=$1,objPrice=$2 WHERE id=$3 RETURNING *;';
    const safeValues = [obj.objName, obj.objPrice, id];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query('DELETE FROM market WHERE id=$1 RETURNING *;', [id]);
  }
}


module.exports = DataCollection;
import { TheDb } from './db/thedb';

export class Users {
  constructor () {

  }

  insert (params) {
    let sql = "INSERT INTO USERS (name, age, address) VALUES (?,?,?)";
    TheDb.insert(sql, params);
    return true;
  }

  update (params) {
    let sql = "UPDATE USERS SET name = ?, age = ?, address = ? WHERE id = ?";
    TheDb.update(sql, params);
    return true; 
  }

  deleteById (id) {
    let sql = "UPDATE USERS SET is_active = 0 WHERE id = ?";
    TheDb.update(sql, [id]);
    return true; 
  }

  fetchById (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1 AND id = " + id;
    TheDb.db.run(sql);
    return true; 
  }

  fetchALL (id) {
    let sql = "SELECT name, age, address FROM USERS";
    TheDb.db.run(sql);
    return true; 
  }

  fetchActiveUsers (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1";
    TheDb.db.run(sql);
    return true; 
  }
}
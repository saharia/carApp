import { TheDb } from './db/thedb';

export class Users {
  firstName: string;
  email: string;
  password: string;

  constructor () {

  }

  insert (params) {
    console.log(params)
    let sql = "INSERT INTO users (first_name, email, password) VALUES (?,?,?)";
    TheDb.insert(sql, params);
    return true;
  }

  update (params) {
    let sql = "UPDATE USERS SET name = ?, age = ?, address = ? WHERE id = ?";
    return TheDb.update(sql, params);
  }

  deleteById (id) {
    let sql = "UPDATE USERS SET is_active = 0 WHERE id = ?";
    return TheDb.update(sql, [id]);
  }

  fetchById (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1 AND id = " + id;
    return TheDb.db.run(sql);
  }

  fetchALL (id) {
    let sql = "SELECT name, age, address FROM USERS";
    return TheDb.db.run(sql);
  }

  fetchActiveUsers (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1";
    return TheDb.db.run(sql);
  }

  checkLogin (params) {
    let sql = "SELECT * FROM USERS WHERE is_active = 1 AND (email = '" + params.email + "' or username = '" + params.email + "') AND password";
    return TheDb.db.run(sql);
  }
}
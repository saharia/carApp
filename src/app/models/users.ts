import { TheDb } from './db/thedb';
var bcrypt = require('bcryptjs');

export class Users {
  firstName: string;
  email: string;
  password: string;

  constructor () {

  }

  insert (params): Promise<Array<{}>> {
    //console.log(params)
    return new Promise<Array<{}>>((resolve, reject) => {
      const params1 = [ params.firstName, params.email, params.password, 1, new Date() ];
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(params.password, salt);
      params1[2] = hash;
      let sql = "INSERT INTO users (first_name, email, password, is_active, created_at) VALUES (?,?,?,?,?)";

      //Email validation
      TheDb.selectOne("SELECT * FROM users WHERE email = ? AND is_active = ?", [ params.email, 1 ]).then(
        (result) => {
          if (result) {
            reject({ msg: "Email already exists!" });
          } else {
            TheDb.insert(sql, params1).then(
              (result) => resolve([{ success: true, msg: "The new user registered succesfully" }]),
              (error) => reject({ msg: "Internal server errro" })
            ); 
          }
        },
        (error) => {
          console.log(error)
          if (error) {
            reject({ msg: "Internal server error!" });
          }
        }
      );
    });
  }

  checkAuth (): Promise<Object> {
    return new Promise<Object>((resolve, reject) => {
      TheDb.selectOne("SELECT * FROM users WHERE is_login = 1 AND is_active = 1", []).then(
        (result) => {
          if (result) {
            resolve({ success: true, msg: "Login exists", data: result });
          } else {
            reject({ msg: "Not a login" });
          }
        },
        (error) => {
          if (error) {
            reject({ msg: "Internal server error!" });
          }
        }
      );
    });
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
    let sql = "SELECT * FROM users WHERE is_active = 1 AND email = ?";
    return new Promise<Array<{}>>((resolve, reject) => {
      TheDb.selectOne(sql, [ params.email ]).then(
        (result) => {
          if (result) {
            const validPassword = bcrypt.compareSync(params.password, result['password']);
            if (validPassword) {
              resolve([{ success: true, msg: "Login successfull", data: result }]);
            } else {
              reject({ msg: "Invalid login details!" });  
            }
          } else {
            reject({ msg: "Invalid login details!" });
          }
        },
        (error) => {
          console.log(error)
          if (error) {
            reject({ msg: "Internal server error!" });
          }
        }
      );
    });
  }
}
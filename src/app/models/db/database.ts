const sqlite3 = window.require('sqlite3').verbose();

export class DB {
  public static db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, function (err) {
      if (err) console.log(err.message);
  });
}
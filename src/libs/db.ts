import { MysqlError } from "mysql";

const mysql = require("mysql");

export const conn = () =>
  mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  });

export function get<T>(sql: string, values?: any[]) {
  return new Promise((resolve: (value: T) => void, reject) => {
    conn().query(sql, values, (err: MysqlError | null, res: T) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}
export function first<T>(sql: string, values?: any[]) {
  return new Promise((resolve: (value: T) => void, reject) => {
    conn().query(sql, values, (err: MysqlError | null, res: T[]) => {
      if (err) reject(err);
      else resolve(res?.[0]);
    });
  });
}

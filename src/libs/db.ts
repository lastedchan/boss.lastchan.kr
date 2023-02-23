import mysql, { MysqlError } from "mysql";

export const connect = () =>
  mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  });

export function get<T>(sql: string, values?: any[]) {
  return new Promise<T>((resolve: (value: T) => void, reject) => {
    const conn = connect();
    conn.query(sql, values, (err: MysqlError | null, res: T) => {
      if (err) reject(err);
      else resolve(res);
    });
    conn.end();
  });
}

export function first<T>(sql: string, values?: any[]) {
  return new Promise<T>((resolve: (value: T) => void, reject) => {
    const conn = connect();
    conn.query(sql, values, (err: MysqlError | null, res: T[]) => {
      if (err) reject(err);
      else resolve(res?.[0]);
    });
    conn.end();
  });
}

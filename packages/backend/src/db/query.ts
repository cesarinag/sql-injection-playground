import { QueryResult } from 'pg'
import pool from './pool'

export default (text: string, params?: any) =>
  new Promise<QueryResult>((resolve, reject) => {
    pool
      .query(text, params)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })

/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import knex from 'knex';
import config from './config';
import { createNewId } from './utils';
export * from '../../db/types';

/**
 * Knex.js database client and query builder for PostgreSQL.
 *
 * @see https://knexjs.org/
 */
const db = knex(config);

// Extend `db.fn` with an additional functionality.
db.fn.constructor.prototype.newUserId = createNewId(db, 'user', 6);
db.fn.constructor.prototype.newAccountId = createNewId(db, 'accounts', 6);
db.fn.constructor.prototype.newOrderId = createNewId(db, 'orders', 6);

// Ensure that the database connections will be closed when
// the Node.js process is being shut down.
process.once('SIGTERM', function () {
  db.destroy();
});

export default db;

/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Knex } from 'knex';

/**
 * The initial database schema (migration).
 * @see https://knexjs.org/#Schema
 */
export async function up(db: Knex) {
  // User accounts
  await db.schema.createTable('orders', (table) => {
    table.specificType('id', 'short_id').notNullable().primary();
    table.dateTime('book_at');
    table.string('purchase_account', 64);
    table.string('book_account', 64);
    table.string('book_store');
    table.double('book_price');
    table.string('track_no', 64);

    table.string('self_no', 50).notNullable();
    table.string('address').notNullable();
    table.string('spec').notNullable();
    table.integer('amount').notNullable();
    table.integer('sales_price').notNullable();
    table.string('self_store').notNullable();
    table.string('product').notNullable();

    table.string('status').notNullable();
  });
}

/**
 * Rollback function for the migration.
 */
export async function down(db: Knex) {
  await db.schema.dropTableIfExists('orders');
}

export const configuration = { transaction: true };

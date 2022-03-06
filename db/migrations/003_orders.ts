/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Knex } from "knex";

/**
 * The initial database schema (migration).
 * @see https://knexjs.org/#Schema
 */
export async function up(db: Knex) {
  // User accounts
  await db.schema.createTable("orders", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table.string("no", 50);
    table.string("name", 1024).notNullable();
    table.integer("amount").notNullable();
    table.double("price").notNullable();
    table.string("track_no", 64);
    table.string("status");
  });
}

/**
 * Rollback function for the migration.
 */
export async function down(db: Knex) {
  await db.schema.dropTableIfExists("orders");
}

export const configuration = { transaction: true };

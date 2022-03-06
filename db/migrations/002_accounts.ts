/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Knex } from "knex";

/**
 * The initial database schema (migration).
 * @see https://knexjs.org/#Schema
 */
export async function up(db: Knex) {
  // User accounts
  await db.schema.createTable("accounts", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table.string("user_id", 50);
    table.string("phone", 50).notNullable().unique();
    table.string("data", 2048);
    table.string("status");
  });
}

/**
 * Rollback function for the migration.
 */
export async function down(db: Knex) {
  await db.schema.dropTableIfExists("accounts");
}

export const configuration = { transaction: true };

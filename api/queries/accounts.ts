/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLFieldConfig } from "graphql";
import { cursorToOffset } from "graphql-relay";
import { Context } from "../context";
import db, { Account } from "../db";
import { AccountsType } from "../types/accounts";

export const accounts: GraphQLFieldConfig<Account[], Context> = {
  description: "Fetches accounts.",
  type: AccountsType,

  async resolve(root, args, ctx) {
    const query = db.table<Account[]>("accounts");

    const limit = args.first === undefined ? 200 : args.first;
    const offset = args.after ? cursorToOffset(args.after) + 1 : 0;

    const data = await query.clone().limit(limit).offset(offset).select();

    return data;
  },
};

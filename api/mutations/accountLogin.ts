/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import "knex";
import { db } from "..";
import { login } from "../automation/login";
import { Context } from "../context";
import { AccountType } from "../types/account";
import { validate, ValidationError } from "../utils";

type AccountLoginInput = {
  id?: string | null;
};

/**
 * @example
 *   mutation {
 *     createUser(input: { email: "user@email.com" }, dryRun: false) {
 *       user {
 *         id
 *         email
 *       }
 *     }
 *   }
 */
export const accountLogin: GraphQLFieldConfig<unknown, Context> = {
  description: "Creates a new account",

  type: new GraphQLObjectType({
    name: "AccountLoginPayload",
    fields: {
      account: { type: AccountType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "AccountLoginInput",
        fields: {
          id: { type: GraphQLString },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    const input = args.input as AccountLoginInput;
    const dryRun = args.dryRun as boolean;

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      id: value("id").notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const id = await db.fn.newAccountId();
    const [account] = await db
      .table("accounts")
      .where("id", "=", data.id as string)
      .returning("*");

    const jsonData = await login(account?.phone);
    console.log(jsonData);

    const [result] = await db
      .table("accounts")
      .where("id", "=", data.id as string)
      .update({ data: JSON.stringify(jsonData), status: "loged" }, "*");

    console.log(">>>", result);

    return { account: result };
  },
};

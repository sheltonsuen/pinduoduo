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
import { Context } from "../context";
import db from "../db";
import { AccountType } from "../types/account";
import { validate, ValidationError } from "../utils";

type CreateAccountInput = {
  userId?: string | null;
  phone?: string | null;
  status?: string | null;
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
export const createAccount: GraphQLFieldConfig<unknown, Context> = {
  description: "Creates a new account",

  type: new GraphQLObjectType({
    name: "CreateAccountPayload",
    fields: {
      user: { type: AccountType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "CreateAccountInput",
        fields: {
          userId: { type: GraphQLString },
          phone: { type: GraphQLString },
          status: { type: GraphQLString, defaultValue: "created" },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    const input = args.input as CreateAccountInput;
    const dryRun = args.dryRun as boolean;

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      user_id: value("userId").notEmpty(),
      phone: value("phone").notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const id = await db.fn.newAccountId();
    const [user] = await db
      .table("accounts")
      .insert({ id, ...data })
      .returning("*");

    return { user };
  },
};

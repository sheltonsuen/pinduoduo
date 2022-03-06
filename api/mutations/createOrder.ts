/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import "knex";
import { Context } from "../context";
import db from "../db";
import { OrderType } from "../types/order";
import { validate, ValidationError } from "../utils";

type CreateOrderInput = {
  no?: string | null;
  name?: string | null;
  amount?: number | null;
  price?: number | null;
  track_no?: number | null;
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
export const createOrder: GraphQLFieldConfig<unknown, Context> = {
  description: "Creates a new",

  type: new GraphQLObjectType({
    name: "CreateOrderPayload",
    fields: {
      order: { type: OrderType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "CreateOrderInput",
        fields: {
          no: { type: GraphQLString },
          name: { type: GraphQLString },
          amount: { type: GraphQLInt },
          price: { type: GraphQLFloat },
          trackNo: { type: GraphQLString },
          status: { type: GraphQLString, defaultValue: "created" },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    const input = args.input as CreateOrderInput;
    const dryRun = args.dryRun as boolean;

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      no: value("no").notEmpty(),
      name: value("name").notEmpty(),
      amount: value("amount").notEmpty(),
      price: value("price").notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const id = await db.fn.newAccountId();
    const [order] = await db
      .table("orders")
      .insert({ id, ...data })
      .returning("*");

    return { order };
  },
};

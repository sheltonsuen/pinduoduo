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
import { OrderType } from "../types/order";
import { validate, ValidationError } from "../utils";

type AutoOrderInput = {
  no?: string | null;
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
export const autoOrder: GraphQLFieldConfig<unknown, Context> = {
  description: "Creates a new",

  type: new GraphQLObjectType({
    name: "AutoOrderPayload",
    fields: {
      order: { type: OrderType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "AutoOrderInput",
        fields: {
          no: { type: GraphQLString },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    const input = args.input as AutoOrderInput;
    const dryRun = args.dryRun as boolean;

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      no: value("no").notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const [order] = await db
      .table("orders")
      .where("no", "=", data.no as string)
      .returning("*");

    console.log(order);

    return { order };
  },
};
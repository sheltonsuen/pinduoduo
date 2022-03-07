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
} from 'graphql';
import 'knex';
import { Context } from '../context';
import db from '../db';
import { OrderType } from '../types/order';
import { validate, ValidationError } from '../utils';

type CreateOrderInput = {
  selfNo?: string | null;
  address?: string | null;
  spec?: string | null;
  amount?: number | null;
  salesPrice?: number | null;
  selfStore?: string | null;
  product?: string | null;
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
  description: 'Creates a new',

  type: new GraphQLObjectType({
    name: 'CreateOrderPayload',
    fields: {
      order: { type: OrderType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'CreateOrderInput',
        fields: {
          selfNo: { type: GraphQLString },
          address: { type: GraphQLString },
          spec: { type: GraphQLString },
          amount: { type: GraphQLInt },
          salesPrice: { type: GraphQLFloat },
          selfStore: { type: GraphQLString },
          product: { type: GraphQLString },
          status: { type: GraphQLString, defaultValue: 'created' },
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
      self_no: value('selfNo').notEmpty(),
      address: value('address').notEmpty(),
      spec: value('spec').notEmpty(),
      amount: value('amount').notEmpty(),
      sales_price: value('salesPrice').notEmpty(),
      self_store: value('selfStore').notEmpty(),
      product: value('product').notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const id = await db.fn.newAccountId();
    const [order] = await db
      .table('orders')
      .insert({ id, ...data })
      .returning('*');

    return { order };
  },
};

/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLFieldConfig, GraphQLObjectType } from 'graphql';
import 'knex';
import { automationOrder } from '../automation/order';
import { Context } from '../context';
import db, { Account, Order } from '../db';
import { OrdersType } from '../types/orders';
import { validate, ValidationError } from '../utils';

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
  description: 'Creates a new',

  type: new GraphQLObjectType({
    name: 'AutoOrderPayload',
    fields: {
      orders: { type: OrdersType },
    },
  }),

  args: {},

  async resolve(self, args, ctx) {
    const input = args.input as AutoOrderInput;
    const dryRun = args.dryRun as boolean;

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      no: value('no').notEmpty(),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (dryRun) return { user: null };

    const accounts = await db
      .table<Account>('accounts')
      .where('status', '=', 'loged')
      .returning('*');

    // TODO: choose one
    const account =
      accounts[Math.floor(Math.random() * accounts.length) % accounts.length];

    const [order] = await db
      .table<Order>('orders')
      .where('no', '=', data.no as string)
      .select();

    console.log('>>>', accounts, account);

    await automationOrder(account, order);
    console.log(order);

    return { order };
  },
};

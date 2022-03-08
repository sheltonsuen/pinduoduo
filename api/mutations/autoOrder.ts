/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLFieldConfig, GraphQLObjectType } from 'graphql';
import 'knex';
import { automationOrder } from '../automation/order';
import { Context } from '../context';
import db, { Account, Order } from '../db';
import { OrdersType } from '../types/orders';

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

    const accounts = await db
      .table<Account>('accounts')
      .where('status', '=', 'loged')
      .returning('*');

    // TODO: choose one
    const account =
      accounts[Math.floor(Math.random() * accounts.length) % accounts.length];

    const orders = await db.table<Order>('orders').select();

    for (const order of orders) {
      await automationOrder(account, order);
    }

    const result = await db.table<Order>('orders').select();
    return { orders: result };
  },
};

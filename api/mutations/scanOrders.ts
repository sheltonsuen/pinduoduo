/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { readdir } from 'fs/promises';
import { GraphQLFieldConfig, GraphQLObjectType } from 'graphql';
import 'knex';
import xlxs from 'node-xlsx';
import path from 'path';
import { Context } from '../context';
import db from '../db';
import { OrdersType } from '../types/orders';

const notNullableMap = [
  'self_no',
  'address',
  'spec',
  'amount',
  'sales_price',
  'self_store',
  'product',
];

const keyMap = {
  book_at: '日期',
  purchase_account: '付款账号',
  book_account: '下单账号',
  book_store: '下单店铺',
  book_price: '他店下单金额',
  track_no: '物流单号',

  self_no: '自店订单号',
  address: '收货信息',
  spec: '规格',
  amount: '件数',
  sales_price: '销售金额',
  self_store: '自家店铺',
  product: '产品',
};

export const scanOrders: GraphQLFieldConfig<unknown, Context> = {
  description: 'scan all orders',

  type: new GraphQLObjectType({
    name: 'ScanOrdersPayload',
    fields: {
      orders: { type: OrdersType },
    },
  }),

  args: {},

  async resolve(self, args, ctx) {
    await db.table('orders').delete();

    const dataDir = path.resolve(
      import.meta.url.replace('file:', ''),
      '../../data',
    );

    const files = await readdir(dataDir);

    const orders = files
      .map((v) => xlxs.parse(`${dataDir}/${v}`))
      .flat()
      .filter(({ name }) => /^[0,1]?\d\.[0,1,2,3]?\d$/.test(name))
      .map(({ name, data }) => {
        data.shift();
        const head = data.shift() as string[];

        const indexes = Object.entries(keyMap).map(([k, v]) => [
          k,
          head.indexOf(v),
        ]);

        return data.map((row) =>
          indexes
            .map(([k, v]) => [k, (row as string[])[v as number]])
            .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),
        );
      })
      .flat()
      .map((v) =>
        Object.entries(v)
          .filter(([k, v]) => (typeof v === 'string' ? !!v?.trim() : !!v))
          .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),
      )
      .filter((v) => notNullableMap.every((k) => !!(v as any)[k]))
      .map(async (v) => {
        const id = await db.fn.newOrderId();

        console.log(v);

        await db
          .table('orders')
          .insert({ id, ...v, status: 'created' })
          .returning('*');
      });

    return { orders };
  },
};

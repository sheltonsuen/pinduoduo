/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';
import { Context } from '../context';
import type { Order } from '../db';
import { countField } from './fields';
import { nodeInterface } from './node';

export const OrderType = new GraphQLObjectType<Order, Context>({
  name: 'Order',
  description: 'The registered account.',
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    bookAt: {
      type: GraphQLString,
      resolve(self) {
        return self.book_at;
      },
    },
    purchaseAccount: {
      type: GraphQLString,
      resolve(self) {
        return self.purchase_account;
      },
    },
    bookAccount: {
      type: GraphQLString,
      resolve(self) {
        return self.book_account;
      },
    },
    bookStore: {
      type: GraphQLString,
      resolve(self) {
        return self.book_store;
      },
    },
    bookPrice: {
      type: GraphQLString,
      resolve(self) {
        return self.book_price;
      },
    },
    trackNo: {
      type: GraphQLString,
      resolve(self) {
        return self.track_no;
      },
    },

    selfNo: {
      type: GraphQLString,
      resolve(self) {
        return self.self_no;
      },
    },
    address: {
      type: GraphQLString,
    },
    spec: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLString,
    },
    salesPrice: {
      type: GraphQLString,
      resolve(self) {
        return self.sales_price;
      },
    },
    selfStore: {
      type: GraphQLString,
      resolve(self) {
        return self.self_store;
      },
    },
    product: {
      type: GraphQLString,
    },

    status: {
      type: GraphQLString,
    },
  },
});

const connection = connectionDefinitions({
  name: 'Order',
  nodeType: OrderType,
  connectionFields: { totalCount: countField },
});

export const OrderConnection = connection.connectionType;
export const OrderEdge = connection.edgeType;

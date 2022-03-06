/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../context";
import type { Order } from "../db";
import { countField } from "./fields";
import { nodeInterface } from "./node";

export const OrderType = new GraphQLObjectType<Order, Context>({
  name: "Order",
  description: "The registered account.",
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    no: {
      type: GraphQLString,
      resolve(self) {
        return self.no;
      },
    },

    name: {
      type: GraphQLString,
      resolve(self) {
        return self.name;
      },
    },

    amount: {
      type: GraphQLInt,
      resolve(self) {
        return self.amount;
      },
    },

    price: {
      type: GraphQLFloat,
      resolve(self) {
        return self.price;
      },
    },

    trackNo: {
      type: GraphQLString,
      resolve(self) {
        return self.track_no;
      },
    },

    status: {
      type: GraphQLString,
      resolve(self) {
        return self.status;
      },
    },
  },
});

const connection = connectionDefinitions({
  name: "Order",
  nodeType: OrderType,
  connectionFields: { totalCount: countField },
});

export const OrderConnection = connection.connectionType;
export const OrderEdge = connection.edgeType;

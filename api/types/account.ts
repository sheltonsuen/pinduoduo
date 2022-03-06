/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../context";
import type { Account } from "../db";
import { countField } from "./fields";
import { nodeInterface } from "./node";

export const AccountType = new GraphQLObjectType<Account, Context>({
  name: "Account",
  description: "The registered account.",
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    userId: {
      type: GraphQLString,
      resolve(self) {
        return self.user_id;
      },
    },

    phone: {
      type: GraphQLString,
      resolve(self) {
        return self.phone;
      },
    },

    data: {
      type: GraphQLString,
      resolve(self) {
        return self.data;
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
  name: "Account",
  nodeType: AccountType,
  connectionFields: { totalCount: countField },
});

export const AccountConnection = connection.connectionType;
export const AccountEdge = connection.edgeType;

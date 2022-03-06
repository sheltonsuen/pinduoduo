/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLList } from "graphql";
import { OrderType } from "./order";

export const OrdersType = new GraphQLList(OrderType);

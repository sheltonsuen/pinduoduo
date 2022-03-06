/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLList } from "graphql";
import { AccountType } from "./account";

export const AccountsType = new GraphQLList(AccountType);

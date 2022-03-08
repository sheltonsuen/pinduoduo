/**
 * @generated SignedSource<<256d19394fbde69f6199bd3737fe95b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ordersQuery$variables = {};
export type ordersQuery$data = {
  readonly orders: ReadonlyArray<{
    readonly bookAt: string | null;
    readonly purchaseAccount: string | null;
    readonly bookAccount: string | null;
    readonly bookStore: string | null;
    readonly bookPrice: string | null;
    readonly trackNo: string | null;
    readonly selfNo: string | null;
    readonly address: string | null;
    readonly spec: string | null;
    readonly amount: string | null;
    readonly salesPrice: string | null;
    readonly selfStore: string | null;
    readonly product: string | null;
    readonly status: string | null;
  } | null> | null;
};
export type ordersQuery = {
  variables: ordersQuery$variables;
  response: ordersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bookAt",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "purchaseAccount",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bookAccount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bookStore",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bookPrice",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trackNo",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selfNo",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "spec",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "salesPrice",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selfStore",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "product",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ordersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Order",
        "kind": "LinkedField",
        "name": "orders",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ordersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Order",
        "kind": "LinkedField",
        "name": "orders",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "51e4faf5ae7eee365ab81d1620e1a964",
    "id": null,
    "metadata": {},
    "name": "ordersQuery",
    "operationKind": "query",
    "text": "query ordersQuery {\n  orders {\n    bookAt\n    purchaseAccount\n    bookAccount\n    bookStore\n    bookPrice\n    trackNo\n    selfNo\n    address\n    spec\n    amount\n    salesPrice\n    selfStore\n    product\n    status\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fffd9e5f7565b6259cb7ef316db3bd29";

export default node;

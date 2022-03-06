/**
 * @generated SignedSource<<34b85c488efd108a4d96a296fb689561>>
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
    readonly id: string;
    readonly no: string | null;
    readonly name: string | null;
    readonly amount: number | null;
    readonly price: number | null;
    readonly trackNo: string | null;
    readonly status: string | null;
  } | null> | null;
};
export type ordersQuery = {
  variables: ordersQuery$variables;
  response: ordersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Order",
    "kind": "LinkedField",
    "name": "orders",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "no",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "trackNo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ordersQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ordersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6ef7149d4b502735825020c5323f4539",
    "id": null,
    "metadata": {},
    "name": "ordersQuery",
    "operationKind": "query",
    "text": "query ordersQuery {\n  orders {\n    id\n    no\n    name\n    amount\n    price\n    trackNo\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e09e9e93d3cfa29fcbb64732c453446";

export default node;

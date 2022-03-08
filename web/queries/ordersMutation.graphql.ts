/**
 * @generated SignedSource<<37e32295270c976b2e5b67b17489be27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ordersMutation$variables = {};
export type ordersMutation$data = {
  readonly scanOrders: {
    readonly orders: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
  } | null;
};
export type ordersMutation = {
  variables: ordersMutation$variables;
  response: ordersMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ScanOrdersPayload",
    "kind": "LinkedField",
    "name": "scanOrders",
    "plural": false,
    "selections": [
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
          }
        ],
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
    "name": "ordersMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ordersMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9427b985d0a267d568458bbd2e6e7c0a",
    "id": null,
    "metadata": {},
    "name": "ordersMutation",
    "operationKind": "mutation",
    "text": "mutation ordersMutation {\n  scanOrders {\n    orders {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ce7ac015bfd6bfaf574f022a08a0987";

export default node;

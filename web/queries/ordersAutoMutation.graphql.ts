/**
 * @generated SignedSource<<31fd10acd2d65bf32dfe52c8600f1b5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ordersAutoMutation$variables = {};
export type ordersAutoMutation$data = {
  readonly autoOrder: {
    readonly orders: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
  } | null;
};
export type ordersAutoMutation = {
  variables: ordersAutoMutation$variables;
  response: ordersAutoMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AutoOrderPayload",
    "kind": "LinkedField",
    "name": "autoOrder",
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
    "name": "ordersAutoMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ordersAutoMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a5b4e5e91ca9e13353efaa064595e188",
    "id": null,
    "metadata": {},
    "name": "ordersAutoMutation",
    "operationKind": "mutation",
    "text": "mutation ordersAutoMutation {\n  autoOrder {\n    orders {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c21dc14f55445f322fc6d814c06d3916";

export default node;

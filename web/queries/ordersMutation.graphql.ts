/**
 * @generated SignedSource<<2f7bb1ff8ccae3d0bdf12448223f0e81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AutoOrderInput = {
  no?: string | null;
};
export type ordersMutation$variables = {
  input: AutoOrderInput;
};
export type ordersMutation$data = {
  readonly autoOrder: {
    readonly order: {
      readonly id: string;
      readonly no: string | null;
    } | null;
  } | null;
};
export type ordersMutation = {
  variables: ordersMutation$variables;
  response: ordersMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
        "name": "order",
        "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ordersMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ordersMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5559515659d9866bf95856ff3e5eac20",
    "id": null,
    "metadata": {},
    "name": "ordersMutation",
    "operationKind": "mutation",
    "text": "mutation ordersMutation(\n  $input: AutoOrderInput!\n) {\n  autoOrder(input: $input) {\n    order {\n      id\n      no\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f36a8c5a5b20b005dd066a1ee53d077d";

export default node;

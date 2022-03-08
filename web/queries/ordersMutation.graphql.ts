/**
 * @generated SignedSource<<1d5d3766ddb3d580da30b39f522761e5>>
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
    "cacheID": "a084063effe5acd3df227598f02b68c4",
    "id": null,
    "metadata": {},
    "name": "ordersMutation",
    "operationKind": "mutation",
    "text": "mutation ordersMutation(\n  $input: AutoOrderInput!\n) {\n  autoOrder(input: $input) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dad6c11eadca81d9a8ddaef6d671496b";

export default node;

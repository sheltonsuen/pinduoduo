/**
 * @generated SignedSource<<7acaa9eb037b2ad42fe04248b18d398d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateAccountInput = {
  userId?: string | null;
  phone?: string | null;
  status?: string | null;
};
export type accountsMutation$variables = {
  input: CreateAccountInput;
};
export type accountsMutation$data = {
  readonly createAccount: {
    readonly account: {
      readonly id: string;
      readonly phone: string | null;
      readonly data: string | null;
      readonly status: string | null;
    } | null;
  } | null;
};
export type accountsMutation = {
  variables: accountsMutation$variables;
  response: accountsMutation$data;
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
    "concreteType": "CreateAccountPayload",
    "kind": "LinkedField",
    "name": "createAccount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
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
            "name": "phone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "data",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "accountsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "303a59ab42803dd351f82de0557b4022",
    "id": null,
    "metadata": {},
    "name": "accountsMutation",
    "operationKind": "mutation",
    "text": "mutation accountsMutation(\n  $input: CreateAccountInput!\n) {\n  createAccount(input: $input) {\n    account {\n      id\n      phone\n      data\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "796b2c0b47568bfa32a1a4310d814438";

export default node;

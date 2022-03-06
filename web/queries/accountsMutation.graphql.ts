/**
 * @generated SignedSource<<bea0870fcdebffe4686d0dfc94cc2df7>>
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
    readonly user: {
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
        "name": "user",
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
    "cacheID": "5fa4cbe454fcd84e50cd04ca7b7c6885",
    "id": null,
    "metadata": {},
    "name": "accountsMutation",
    "operationKind": "mutation",
    "text": "mutation accountsMutation(\n  $input: CreateAccountInput!\n) {\n  createAccount(input: $input) {\n    user {\n      id\n      phone\n      data\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3389b5f659949e36e236e05f38a9ccda";

export default node;

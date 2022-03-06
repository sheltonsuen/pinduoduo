/**
 * @generated SignedSource<<9e8e00892105034f94fae79624342d74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AccountLoginInput = {
  id?: string | null;
};
export type accountLoginMutation$variables = {
  input?: AccountLoginInput | null;
};
export type accountLoginMutation$data = {
  readonly accountLogin: {
    readonly account: {
      readonly id: string;
    } | null;
  } | null;
};
export type accountLoginMutation = {
  variables: accountLoginMutation$variables;
  response: accountLoginMutation$data;
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
    "concreteType": "AccountLoginPayload",
    "kind": "LinkedField",
    "name": "accountLogin",
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
    "name": "accountLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aa029270881628bd8d262c58da0a1395",
    "id": null,
    "metadata": {},
    "name": "accountLoginMutation",
    "operationKind": "mutation",
    "text": "mutation accountLoginMutation(\n  $input: AccountLoginInput\n) {\n  accountLogin(input: $input) {\n    account {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a1988f66ed79724a405176ea7698dfa9";

export default node;

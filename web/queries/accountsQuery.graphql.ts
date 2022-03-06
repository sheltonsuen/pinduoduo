/**
 * @generated SignedSource<<0d5252c464534e675fbce6e0f3696035>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type accountsQuery$variables = {};
export type accountsQuery$data = {
  readonly accounts: {
    readonly id: string;
    readonly phone: string | null;
    readonly data: string | null;
    readonly status: string | null;
  } | null;
};
export type accountsQuery = {
  variables: accountsQuery$variables;
  response: accountsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "accounts",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "accountsQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "accountsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1da2119df86ccee07d1d9d3108eb4a8c",
    "id": null,
    "metadata": {},
    "name": "accountsQuery",
    "operationKind": "query",
    "text": "query accountsQuery {\n  accounts {\n    id\n    phone\n    data\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "b38d465c6f528fa3481ab16ae39599bf";

export default node;

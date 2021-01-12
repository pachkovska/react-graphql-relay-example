/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoListWrapperQueryVariables = {
    login: string;
};
export type RepoListWrapperQueryResponse = {
    readonly user: {
        readonly repositories: {
            readonly pageInfo: {
                readonly startCursor: string | null;
            };
            readonly totalCount: number;
            readonly totalDiskUsage: number;
            readonly " $fragmentRefs": FragmentRefs<"RepoList_repos">;
        };
    } | null;
};
export type RepoListWrapperQuery = {
    readonly response: RepoListWrapperQueryResponse;
    readonly variables: RepoListWrapperQueryVariables;
};



/*
query RepoListWrapperQuery(
  $login: String!
) {
  user(login: $login) {
    repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 100, privacy: PUBLIC) {
      pageInfo {
        startCursor
      }
      totalCount
      totalDiskUsage
      ...RepoList_repos
    }
    id
  }
}

fragment RepoList_repos on RepositoryConnection {
  nodes {
    createdAt
    isInOrganization
    isPrivate
    name
    primaryLanguage {
      name
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "CREATED_AT"
    }
  },
  {
    "kind": "Literal",
    "name": "privacy",
    "value": "PUBLIC"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalDiskUsage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoListWrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RepoList_repos"
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},privacy:\"PUBLIC\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepoListWrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isInOrganization",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isPrivate",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},privacy:\"PUBLIC\")"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0bd5a5eacccd5c560bbac8eb69e22a3b",
    "id": null,
    "metadata": {},
    "name": "RepoListWrapperQuery",
    "operationKind": "query",
    "text": "query RepoListWrapperQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 100, privacy: PUBLIC) {\n      pageInfo {\n        startCursor\n      }\n      totalCount\n      totalDiskUsage\n      ...RepoList_repos\n    }\n    id\n  }\n}\n\nfragment RepoList_repos on RepositoryConnection {\n  nodes {\n    createdAt\n    isInOrganization\n    isPrivate\n    name\n    primaryLanguage {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ac62cf1106c533d5481b47ce26084710';
export default node;
